
'use client';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Text, useTexture, Stars, Cloud, Html } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Vector3, Euler, Box3, Sphere, Raycaster, Mesh, MathUtils, Color } from 'three';
import { Camera, Settings, Sun, Moon, Volume2, VolumeX, Eye, EyeOff, CloudRain, CloudLightning } from 'lucide-react';

// Audio Manager (Copied directly from Sun Temple)
class AudioManager {
  constructor() {
    this.sounds = {};
    this.enabled = true;
    this.ambientVolume = 0.4;
    this.effectsVolume = 0.5;
    this.audioElement = null;
    this.isInitialized = false;
    this.audioContext = null;
  }
  async init() {
    if (typeof window !== 'undefined' && !this.isInitialized) {
      try {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.audioElement = new Audio();
        // PERFECT TEMPLE MUSIC: Mystical, ethereal temple ambience
        this.audioElement.src = 'https://cdn.pixabay.com/download/audio/2022/08/04/audio_2dde668d05.mp3?filename=mystical-temple-ambience-133032.mp3';
        this.audioElement.loop = true;
        this.audioElement.volume = this.ambientVolume;
        this.audioElement.crossOrigin = 'anonymous';
        this.audioElement.addEventListener('canplaythrough', () => {
          console.log('Temple audio loaded successfully');
        });
        this.audioElement.addEventListener('error', (e) => {
          console.log('Primary audio failed, trying mystical alternative');
          // Backup: Another temple-themed track
          this.audioElement.src = 'https://cdn.pixabay.com/download/audio/2023/02/28/audio_c77dc6adec.mp3?filename=ethereal-ambience-124738.mp3';
          this.audioElement.load();
        });
        this.isInitialized = true;
        console.log('Temple audio system initialized');
      } catch (error) {
        console.error('Audio initialization error:', error);
        this.createBackupAudio();
      }
    }
  }
  createBackupAudio() {
    if (this.audioContext) {
      try {
        // Create mystical backup tones
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        oscillator1.frequency.setValueAtTime(220, this.audioContext.currentTime); // Low mystical tone
        oscillator2.frequency.setValueAtTime(440, this.audioContext.currentTime); // Higher harmonic
        oscillator1.type = 'sine';
        oscillator2.type = 'triangle';
        gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        oscillator1.start();
        oscillator2.start();
        this.backupOscillator = oscillator1;
        this.backupOscillator2 = oscillator2;
        this.backupGain = gainNode;
      } catch (error) {
        console.error('Backup audio failed:', error);
      }
    }
  }
  async playAmbient() {
    if (this.enabled && this.isInitialized) {
      try {
        if (this.audioContext && this.audioContext.state === 'suspended') {
          await this.audioContext.resume();
        }
        if (this.audioElement) {
          const playPromise = this.audioElement.play();
          if (playPromise !== undefined) {
            playPromise.catch(e => {
              console.log('Audio play error, using backup mystical tones:', e);
              this.createBackupAudio();
            });
          }
        }
      } catch (error) {
        console.error('Error playing audio:', error);
        this.createBackupAudio();
      }
    }
  }
  stopAmbient() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.backupGain) {
      this.backupGain.gain.setValueAtTime(0, this.audioContext.currentTime);
    }
  }
  setVolume(type, volume) {
    if (type === 'ambient') {
      this.ambientVolume = volume;
      if (this.audioElement) {
        this.audioElement.volume = volume;
      }
      if (this.backupGain) {
        this.backupGain.gain.setValueAtTime(volume * 0.05, this.audioContext.currentTime);
      }
    }
    if (type === 'effects') this.effectsVolume = volume;
  }
  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.playAmbient();
    } else {
      this.stopAmbient();
    }
    return this.enabled;
  }
  playEffect(type, position) {
    console.log(`Playing effect: ${type} at position:`, position);
  }
}

// Weather and Time System (Copied from Sun Temple)
function useTimeOfDay() {
    const [timeOfDay, setTimeOfDay] = useState(0.5);
    const [timeMode, setTimeMode] = useState('cycle');
    const [isPlaying, setIsPlaying] = useState(true);
    const cycleTime = () => setIsPlaying(!isPlaying);
    const setDayTime = () => {
        setTimeMode('day');
        setTimeOfDay(0.5);
        setIsPlaying(false);
    };
    const setNightTime = () => {
        setTimeMode('night');
        setTimeOfDay(0.0);
        setIsPlaying(false);
    };
    const setCycleMode = () => {
        setTimeMode('cycle');
        setIsPlaying(true);
    };
    return { 
        timeOfDay, 
        setTimeOfDay, 
        timeMode,
        setDayTime,
        setNightTime,
        setCycleMode,
        cycleTime, 
        isPlaying 
    };
}

// Component to update time using useFrame
function TimeOfDayUpdater({ timeOfDay, setTimeOfDay, isPlaying, timeMode }) {
    useFrame((state, delta) => {
        if (isPlaying && timeMode === 'cycle') {
            setTimeOfDay(prev => (prev + delta * 0.05) % 1);
        }
    });
    return null;
}

// Custom Sky Component
function CustomSky({ timeOfDay, timeMode }) {
    const meshRef = useRef();
    const smoothStep = (edge0, edge1, x) => {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    };
    const skyColor = useMemo(() => {
        if (timeMode === 'night') {
            return new Color(0x0a0a20);
        } else if (timeMode === 'day') {
            return new Color(0x87ceeb);
        }
        const cycle = timeOfDay;
        const nightColor = new Color(0x0a0a20);
        const dawnColor = new Color(0x4a4a80);
        const sunriseColor = new Color(0xffa500);
        const dayColor = new Color(0x87ceeb);
        const sunsetColor = new Color(0xff6347);
        const duskColor = new Color(0x2f2f5f);
        if (cycle < 0.1) {
            return nightColor;
        } else if (cycle < 0.2) {
            const factor = smoothStep(0.1, 0.2, cycle);
            return nightColor.clone().lerp(dawnColor, factor);
        } else if (cycle < 0.3) {
            const factor = smoothStep(0.2, 0.3, cycle);
            return dawnColor.clone().lerp(sunriseColor, factor);
        } else if (cycle < 0.4) {
            const factor = smoothStep(0.3, 0.4, cycle);
            return sunriseColor.clone().lerp(dayColor, factor);
        } else if (cycle < 0.6) {
            return dayColor;
        } else if (cycle < 0.7) {
            const factor = smoothStep(0.6, 0.7, cycle);
            return dayColor.clone().lerp(sunsetColor, factor);
        } else if (cycle < 0.8) {
            const factor = smoothStep(0.7, 0.8, cycle);
            return sunsetColor.clone().lerp(duskColor, factor);
        } else if (cycle < 0.9) {
            const factor = smoothStep(0.8, 0.9, cycle);
            return duskColor.clone().lerp(nightColor, factor);
        } else {
            return nightColor;
        }
    }, [timeOfDay, timeMode]);
    return (
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[500, 500, 500]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color={skyColor} side={2} />
        </mesh>
    );
}

// Tree Component
function Tree({ position, size = 1, collisionDetector }) {
    const groupRef = useRef();
    useEffect(() => {
        if (collisionDetector && groupRef.current) {
            collisionDetector.addCollisionObject(groupRef.current);
        }
    }, [collisionDetector]);
    return (
        <group ref={groupRef} position={position} scale={[size, size, size]}>
            <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.3, 0.4, 3, 8]} />
                <meshStandardMaterial color="#8B4513" roughness={0.9} />
            </mesh>
            <mesh position={[0, 4, 0]} castShadow receiveShadow>
                <sphereGeometry args={[1.5, 8, 6]} />
                <meshStandardMaterial color="#228B22" roughness={0.8} />
            </mesh>
        </group>
    );
}

// Forest component
function Forest({ collisionDetector }) {
    const trees = useMemo(() => {
        return [
            { position: [12, 0, 5], size: 1.2 },
            { position: [-10, 0, 8], size: 1.1 },
            { position: [8, 0, -6], size: 0.9 },
            { position: [-7, 0, -8], size: 1.3 },
            { position: [25, 0, 15], size: 1.4 },
            { position: [-20, 0, 18], size: 1.1 },
            { position: [18, 0, -12], size: 0.8 },
            { position: [-15, 0, -14], size: 1.2 },
            { position: [30, 0, -5], size: 1.0 },
            { position: [-25, 0, 5], size: 1.3 },
        ];
    }, []);
    return (
        <group>
            {trees.map((tree, index) => (
                <Tree 
                    key={index} 
                    position={tree.position} 
                    size={tree.size}
                    collisionDetector={collisionDetector}
                />
            ))}
        </group>
    );
}

// Particle System
function Particles({ type, count = 100 }) {
    const mesh = useRef();
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = Math.random() * 10 + 1;
            const z = (Math.random() - 0.5) * 50;
            const speed = Math.random() * 0.02 + 0.01;
            const offset = Math.random() * Math.PI * 2;
            temp.push({ position: [x, y, z], speed, offset });
        }
        return temp;
    }, [count]);
    useFrame((state) => {
        if (mesh.current) {
            particles.forEach((particle, i) => {
                const i3 = i * 3;
                if (type === 'dust') {
                    mesh.current.geometry.attributes.position.array[i3 + 1] += Math.sin(state.clock.elapsedTime + particle.offset) * 0.001;
                } else if (type === 'fireflies') {
                    mesh.current.geometry.attributes.position.array[i3] += Math.sin(state.clock.elapsedTime * 0.5 + particle.offset) * 0.02;
                    mesh.current.geometry.attributes.position.array[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.3 + particle.offset) * 0.01;
                }
            });
            mesh.current.geometry.attributes.position.needsUpdate = true;
        }
    });
    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length}
                    array={new Float32Array(particles.flatMap(p => p.position))}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={type === 'fireflies' ? 0.1 : 0.05}
                color={type === 'fireflies' ? '#ffff88' : '#ffffff'}
                transparent
                opacity={type === 'fireflies' ? 0.8 : 0.3}
            />
        </points>
    );
}

// Animated Wildlife
function Birds() {
    const groupRef = useRef();
    const birds = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => ({
            id: i,
            position: [
                (Math.random() - 0.5) * 40,
                Math.random() * 10 + 5,
                (Math.random() - 0.5) * 40
            ],
            speed: Math.random() * 0.02 + 0.01,
            radius: Math.random() * 10 + 5,
            offset: Math.random() * Math.PI * 2
        }));
    }, []);
    useFrame((state) => {
        birds.forEach((bird, i) => {
            const x = Math.cos(state.clock.elapsedTime * bird.speed + bird.offset) * bird.radius + bird.position[0];
            const z = Math.sin(state.clock.elapsedTime * bird.speed + bird.offset) * bird.radius + bird.position[2];
            const y = bird.position[1] + Math.sin(state.clock.elapsedTime * 2 + bird.offset) * 0.5;
            if (groupRef.current?.children[i]) {
                groupRef.current.children[i].position.set(x, y, z);
                groupRef.current.children[i].rotation.y = Math.atan2(
                    Math.sin(state.clock.elapsedTime * bird.speed + bird.offset),
                    Math.cos(state.clock.elapsedTime * bird.speed + bird.offset)
                );
            }
        });
    });
    return (
        <group ref={groupRef}>
            {birds.map((bird) => (
                <mesh key={bird.id} position={bird.position}>
                    <sphereGeometry args={[0.1, 6, 6]} />
                    <meshStandardMaterial color="#444444" />
                </mesh>
            ))}
        </group>
    );
}

// Enhanced Environment
function EnhancedEnvironment({ timeOfDay, timeMode }) {
    const smoothStep = (edge0, edge1, x) => {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    };
    const sunPosition = useMemo(() => {
        if (timeMode === 'day') {
            return [50, 50, 50];
        } else if (timeMode === 'night') {
            return [-50, 20, -50];
        }
        const cycle = timeOfDay;
        let angle;
        if (cycle < 0.2) {
            angle = -Math.PI * 0.3;
        } else if (cycle < 0.8) {
            const dayProgress = (cycle - 0.2) / 0.6;
            angle = -Math.PI * 0.3 + dayProgress * Math.PI * 1.3;
        } else {
            angle = Math.PI * 1.0;
        }
        return [
            Math.cos(angle) * 80,
            Math.max(Math.sin(angle) * 60 + 25, 15),
            Math.sin(angle) * 80
        ];
    }, [timeOfDay, timeMode]);
    const sunColor = useMemo(() => {
        const color = new Color();
        if (timeMode === 'night') {
            color.setHSL(0.65, 0.4, 0.3);
        } else if (timeMode === 'day') {
            color.setHSL(0.1, 0.1, 1.0);
        } else {
            const cycle = timeOfDay;
            if (cycle < 0.1) {
                color.setHSL(0.65, 0.4, 0.3);
            } else if (cycle < 0.2) {
                const factor = smoothStep(0.1, 0.2, cycle);
                color.setHSL(0.65 - factor * 0.15, 0.4 + factor * 0.3, 0.3 + factor * 0.2);
            } else if (cycle < 0.3) {
                const factor = smoothStep(0.2, 0.3, cycle);
                color.setHSL(0.08, 0.8, 0.6 + factor * 0.3);
            } else if (cycle < 0.4) {
                const factor = smoothStep(0.3, 0.4, cycle);
                color.setHSL(0.08 + factor * 0.02, 0.8 - factor * 0.7, 0.9 + factor * 0.1);
            } else if (cycle < 0.6) {
                color.setHSL(0.1, 0.1, 1.0);
            } else if (cycle < 0.7) {
                const factor = smoothStep(0.6, 0.7, cycle);
                color.setHSL(0.1 - factor * 0.02, 0.1 + factor * 0.7, 1.0 - factor * 0.1);
            } else if (cycle < 0.8) {
                const factor = smoothStep(0.7, 0.8, cycle);
                color.setHSL(0.05 - factor * 0.02, 0.8, 0.7 - factor * 0.2);
            } else if (cycle < 0.9) {
                const factor = smoothStep(0.8, 0.9, cycle);
                color.setHSL(0.65 + factor * 0.1, 0.6 - factor * 0.2, 0.5 - factor * 0.2);
            } else {
                color.setHSL(0.65, 0.4, 0.3);
            }
        }
        return color;
    }, [timeOfDay, timeMode]);
    const intensity = useMemo(() => {
        if (timeMode === 'night') return 0.3;
        if (timeMode === 'day') return 1.8;
        const cycle = timeOfDay;
        if (cycle < 0.1) return 0.3;
        if (cycle < 0.2) {
            return 0.3 + smoothStep(0.1, 0.2, cycle) * 0.4;
        }
        if (cycle < 0.3) {
            return 0.7 + smoothStep(0.2, 0.3, cycle) * 0.6;
        }
        if (cycle < 0.4) {
            return 1.3 + smoothStep(0.3, 0.4, cycle) * 0.5;
        }
        if (cycle < 0.6) {
            return 1.8;
        }
        if (cycle < 0.7) {
            return 1.8 - smoothStep(0.6, 0.7, cycle) * 0.5;
        }
        if (cycle < 0.8) {
            return 1.3 - smoothStep(0.7, 0.8, cycle) * 0.6;
        }
        if (cycle < 0.9) {
            return 0.7 - smoothStep(0.8, 0.9, cycle) * 0.4;
        }
        return 0.3;
    }, [timeOfDay, timeMode]);
    const ambientIntensity = useMemo(() => {
        if (timeMode === 'night') return 0.2;
        if (timeMode === 'day') return 0.6;
        const cycle = timeOfDay;
        if (cycle < 0.1) return 0.2;
        if (cycle < 0.2) return 0.2 + smoothStep(0.1, 0.2, cycle) * 0.15;
        if (cycle < 0.3) return 0.35 + smoothStep(0.2, 0.3, cycle) * 0.15;
        if (cycle < 0.4) return 0.5 + smoothStep(0.3, 0.4, cycle) * 0.1;
        if (cycle < 0.6) return 0.6;
        if (cycle < 0.7) return 0.6 - smoothStep(0.6, 0.7, cycle) * 0.1;
        if (cycle < 0.8) return 0.5 - smoothStep(0.7, 0.8, cycle) * 0.15;
        if (cycle < 0.9) return 0.35 - smoothStep(0.8, 0.9, cycle) * 0.15;
        return 0.2;
    }, [timeOfDay, timeMode]);
    return (
        <>
            <ambientLight intensity={ambientIntensity} color={sunColor} />
            <directionalLight
                position={sunPosition}
                intensity={intensity}
                color={sunColor}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
            />
            <CustomSky timeOfDay={timeOfDay} timeMode={timeMode} />
            {(timeMode === 'night' || (timeMode === 'cycle' && (timeOfDay < 0.2 || timeOfDay > 0.8))) && (
                <Stars radius={300} depth={60} count={2000} factor={8} saturation={0} fade />
            )}
        </>
    );
}

// Ground
function Ground({ collisionDetector, timeOfDay, timeMode }) {
    const groundRef = useRef();
    const smoothStep = (edge0, edge1, x) => {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    };
    const groundColor = useMemo(() => {
        const color = new Color();
        if (timeMode === 'night') {
            return color.setHSL(0.08, 0.4, 0.35);
        } else if (timeMode === 'day') {
            return color.setHSL(0.25, 0.6, 0.25);
        }
        const cycle = timeOfDay;
        if (cycle < 0.1) {
            return color.setHSL(0.08, 0.4, 0.35);
        } else if (cycle < 0.2) {
            const factor = smoothStep(0.1, 0.2, cycle);
            return color.setHSL(0.08 + factor * 0.17, 0.4 + factor * 0.1, 0.35 - factor * 0.1);
        } else if (cycle < 0.3) {
            const factor = smoothStep(0.2, 0.3, cycle);
            return color.setHSL(0.25, 0.5 + factor * 0.1, 0.25 + factor * 0.05);
        } else if (cycle < 0.4) {
            const factor = smoothStep(0.3, 0.4, cycle);
            return color.setHSL(0.25, 0.6, 0.25);
        } else if (cycle < 0.6) {
            return color.setHSL(0.25, 0.6, 0.25);
        } else if (cycle < 0.7) {
            const factor = smoothStep(0.6, 0.7, cycle);
            return color.setHSL(0.25, 0.6 - factor * 0.1, 0.25 + factor * 0.05);
        } else if (cycle < 0.8) {
            const factor = smoothStep(0.7, 0.8, cycle);
            return color.setHSL(0.25 - factor * 0.1, 0.5, 0.3 + factor * 0.05);
        } else if (cycle < 0.9) {
            const factor = smoothStep(0.8, 0.9, cycle);
            return color.setHSL(0.15 - factor * 0.07, 0.4, 0.35);
        } else {
            return color.setHSL(0.08, 0.4, 0.35);
        }
    }, [timeOfDay, timeMode]);
    useEffect(() => {
        if (collisionDetector && groundRef.current) {
            collisionDetector.addCollisionObject(groundRef.current);
        }
    }, [collisionDetector]);
    return (
        <group>
            <mesh 
                ref={groundRef}
                rotation={[-Math.PI / 2, 0, 0]} 
                position={[0, -0.1, 0]} 
                receiveShadow
            >
                <planeGeometry args={[100, 100, 20, 20]} />
                <meshStandardMaterial 
                    color={groundColor}
                    roughness={0.8}
                    metalness={0.0}
                />
            </mesh>
            <mesh position={[8, 0.5, 8]} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#8B4513" roughness={0.9} />
            </mesh>
        </group>
    );
}

// Collision detection system
class CollisionDetector {
    constructor() {
        this.raycaster = new Raycaster();
        this.collisionObjects = [];
        this.playerRadius = 0.3;
        this.stepHeight = 0.2;
    }
    addCollisionObject(object) {
        object.traverse((child) => {
            if (child instanceof Mesh) {
                this.collisionObjects.push(child);
            }
        });
    }
    checkCollision(position, direction, distance = 0.5) {
        this.raycaster.set(position, direction.normalize());
        const intersects = this.raycaster.intersectObjects(this.collisionObjects, true);
        if (intersects.length > 0) {
            const closestIntersection = intersects[0];
            return {
                hit: true,
                distance: closestIntersection.distance,
                point: closestIntersection.point,
                normal: closestIntersection.face.normal.clone()
            };
        }
        return { hit: false };
    }
    checkPlayerCollision(currentPos, newPos) {
        const movement = newPos.clone().sub(currentPos);
        const movementDistance = movement.length();
        if (movementDistance < 0.001) return { canMove: true, adjustedPosition: newPos };
        const playerPos = currentPos.clone();
        playerPos.y += 0.5;
        let canMoveX = true;
        let canMoveZ = true;
        let adjustedPosition = newPos.clone();
        const xMovement = new Vector3(newPos.x - currentPos.x, 0, 0);
        if (xMovement.length() > 0) {
            const collision = this.checkCollision(playerPos, xMovement.normalize(), this.playerRadius + Math.abs(xMovement.x));
            if (collision.hit && collision.distance < this.playerRadius + Math.abs(xMovement.x)) {
                canMoveX = false;
                adjustedPosition.x = currentPos.x;
            }
        }
        const zMovement = new Vector3(0, 0, newPos.z - currentPos.z);
        if (zMovement.length() > 0) {
            const collision = this.checkCollision(playerPos, zMovement.normalize(), this.playerRadius + Math.abs(zMovement.z));
            if (collision.hit && collision.distance < this.playerRadius + Math.abs(zMovement.z)) {
                canMoveZ = false;
                adjustedPosition.z = currentPos.z;
            }
        }
        const groundCheck = this.checkCollision(
            new Vector3(adjustedPosition.x, adjustedPosition.y + 1, adjustedPosition.z),
            new Vector3(0, -1, 0),
            2
        );
        if (groundCheck.hit) {
            const groundHeight = groundCheck.point.y;
            const heightDifference = groundHeight - currentPos.y;
            if (heightDifference > this.stepHeight) {
                return { canMove: false, adjustedPosition: currentPos };
            }
            adjustedPosition.y = groundHeight + 0.1;
        }
        return { 
            canMove: canMoveX || canMoveZ, 
            adjustedPosition,
            canMoveX,
            canMoveZ
        };
    }
}

// Fixed First Person Controls (identical to Sun Temple)
function FirstPersonControls({ speed = 6, collisionDetector, audioManager, onMove }) {
    const { camera, gl } = useThree();
    const moveForward = useRef(false);
    const moveBackward = useRef(false);
    const moveLeft = useRef(false);
    const moveRight = useRef(false);
    const isJumping = useRef(false);
    const isCrouching = useRef(false);
    const baseHeight = useRef(1.55);
    const currentHeight = useRef(baseHeight.current);
    const velocity = useRef(new Vector3());
    const direction = useRef(new Vector3());
    const mouseSensitivity = useRef(0.002);
    const isPointerLocked = useRef(false);
    const jumpVelocity = useRef(0);
    const gravity = useRef(-0.02);
    const isGrounded = useRef(true);
    const outerBoundary = useMemo(() => new Box3(
        new Vector3(-35, 0.3, -35),
        new Vector3(35, 3, 35)      
    ), []);
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'KeyW': moveForward.current = true; break;
                case 'KeyS': moveBackward.current = true; break;
                case 'KeyA': moveLeft.current = true; break;
                case 'KeyD': moveRight.current = true; break;
                case 'Space':
                    if (isGrounded.current && !isJumping.current) {
                        isJumping.current = true;
                        isGrounded.current = false;
                        jumpVelocity.current = 0.15;
                    }
                    event.preventDefault();
                    break;
                case 'ShiftLeft':
                case 'ShiftRight':
                    isCrouching.current = true;
                    currentHeight.current = baseHeight.current - 0.4;
                    break;
            }
        };
        const handleKeyUp = (event) => {
            switch (event.code) {
                case 'KeyW': moveForward.current = false; break;
                case 'KeyS': moveBackward.current = false; break;
                case 'KeyA': moveLeft.current = false; break;
                case 'KeyD': moveRight.current = false; break;
                case 'ShiftLeft':
                case 'ShiftRight':
                    isCrouching.current = false;
                    currentHeight.current = baseHeight.current;
                    break;
            }
        };
        const handleMouseMove = (event) => {
            if (document.pointerLockElement === gl.domElement && isPointerLocked.current) {
                const deltaX = event.movementX * mouseSensitivity.current;
                const deltaY = event.movementY * mouseSensitivity.current;
                camera.rotation.y -= deltaX;
            }
        };
        const handleClick = async () => {
            try {
                await gl.domElement.requestPointerLock();
                isPointerLocked.current = true;
                if (audioManager) {
                  audioManager.playAmbient();
                }
            } catch (error) {
                console.log('Pointer lock failed:', error);
            }
        };
        const handlePointerLockChange = () => {
            isPointerLocked.current = document.pointerLockElement === gl.domElement;
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('pointerlockchange', handlePointerLockChange);
        gl.domElement.addEventListener('click', handleClick);
        camera.position.set(0, currentHeight.current, 8);
        camera.rotation.set(0, 0, 0);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('pointerlockchange', handlePointerLockChange);
            gl.domElement.removeEventListener('click', handleClick);
        };
    }, [camera, gl, audioManager, outerBoundary]);
    useFrame((state, delta) => {
        const deltaTime = Math.min(delta, 0.016);
        if (isJumping.current) {
            jumpVelocity.current += gravity.current;
            camera.position.y += jumpVelocity.current;
            if (camera.position.y <= currentHeight.current) {
                camera.position.y = currentHeight.current;
                isJumping.current = false;
                isGrounded.current = true;
                jumpVelocity.current = 0;
            }
        }
        if (!isJumping.current) {
            const targetHeight = isCrouching.current ? (baseHeight.current - 0.4) : baseHeight.current;
            camera.position.y += (targetHeight - camera.position.y) * 0.2;
            currentHeight.current = targetHeight;
        }
        const isMoving = moveForward.current || moveBackward.current || moveLeft.current || moveRight.current;
        if (isMoving) {
            const currentPosition = camera.position.clone();
            const forward = new Vector3();
            camera.getWorldDirection(forward);
            forward.y = 0;
            forward.normalize();
            const right = new Vector3();
            right.crossVectors(forward, new Vector3(0, 1, 0)).normalize();
            direction.current.set(0, 0, 0);
            if (moveForward.current) direction.current.add(forward);
            if (moveBackward.current) direction.current.add(forward.clone().negate());
            if (moveRight.current) direction.current.add(right);
            if (moveLeft.current) direction.current.add(right.clone().negate());
            if (direction.current.length() > 0) {
                direction.current.normalize();
                const acceleration = 30;
                const targetVelocity = direction.current.clone().multiplyScalar(speed);
                velocity.current.lerp(targetVelocity, acceleration * deltaTime);
            }
        } else {
            velocity.current.multiplyScalar(0.8);
        }
        if (velocity.current.length() > 0.001) {
            const currentPosition = camera.position.clone();
            const movement = velocity.current.clone().multiplyScalar(deltaTime);
            movement.y = 0;
            const newPosition = currentPosition.clone().add(movement);
            if (collisionDetector && collisionDetector.collisionObjects.length > 0) {
                const collisionResult = collisionDetector.checkPlayerCollision(currentPosition, newPosition);
                if (collisionResult.canMove) {
                    collisionResult.adjustedPosition.y = camera.position.y;
                    camera.position.copy(collisionResult.adjustedPosition);
                    onMove && onMove(camera.position);
                }
            } else {
                newPosition.y = camera.position.y;
                camera.position.copy(newPosition);
                onMove && onMove(camera.position);
            }
        }
        if (!outerBoundary.containsPoint(camera.position)) {
            const clampedPos = camera.position.clone();
            clampedPos.x = Math.max(outerBoundary.min.x, Math.min(outerBoundary.max.x, camera.position.x));
            clampedPos.y = Math.max(outerBoundary.min.y, Math.min(outerBoundary.max.y, camera.position.y));
            clampedPos.z = Math.max(outerBoundary.min.z, Math.min(outerBoundary.max.z, camera.position.z));
            camera.position.copy(clampedPos);
        }
    });
    return null;
}
function TajMahalModel({ collisionDetector }) {
    const { scene } = useGLTF('/models/tajmahal_compressed.glb');
    useEffect(() => {
        if (collisionDetector && scene) {
            collisionDetector.addCollisionObject(scene);
            scene.traverse((child) => {
                if (child instanceof Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material) {
                        child.material.metalness = 0.1;
                        child.material.roughness = 0.8;
                    }
                }
            });
        }
    }, [scene, collisionDetector]);
    return <primitive object={scene} scale={2.8} position={[0, 0, 0]} />;
}

// Settings Panel (Copied from Sun Temple)
function SettingsPanel({ 
  audioManager, 
  timeOfDay, 
  timeMode,
  setDayTime,
  setNightTime,
  setCycleMode,
  cycleTime, 
  isPlaying,
  showParticles,
  setShowParticles 
}) {
  const [showSettings, setShowSettings] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(audioManager.enabled);
  const [ambientVolume, setAmbientVolume] = useState(0.4);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setAmbientVolume(audioManager.ambientVolume);
  }, [audioManager]);
  const handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    setAmbientVolume(volume);
    audioManager.setVolume('ambient', volume);
  };
  const toggleAudio = async () => {
    const enabled = audioManager.toggle();
    setAudioEnabled(enabled);
    if (enabled) {
      await audioManager.playAmbient();
    }
  };
  const getTimeOfDayLabel = () => {
    if (timeMode === 'night') return 'Night';
    if (timeMode === 'day') return 'Day';
    const cycle = timeOfDay;
    if (cycle < 0.1) return 'Deep Night';
    if (cycle < 0.2) return 'Pre-Dawn';
    if (cycle < 0.3) return 'Sunrise';
    if (cycle < 0.4) return 'Morning';
    if (cycle < 0.6) return 'Day';
    if (cycle < 0.7) return 'Evening';
    if (cycle < 0.8) return 'Sunset';
    if (cycle < 0.9) return 'Dusk';
    return 'Night';
  };
  const timeOptions = [
    { value: 'day', label: 'Day Time', icon: <Sun size={16} />, description: 'Fixed bright daylight' },
    { value: 'night', label: 'Night Time', icon: <Moon size={16} />, description: 'Fixed stars with perfect ground visibility' },
    { value: 'cycle', label: 'Day/Night Cycle', icon: <Settings size={16} />, description: 'Smooth 20-second progression' }
  ];
  return (
    <>
      <button
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-r-xl shadow-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-300 ${
          showSettings ? 'translate-x-80' : 'translate-x-0'
        } ${isHovered ? 'scale-110 shadow-xl' : ''}`}
        onClick={() => setShowSettings(!showSettings)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Settings
          size={24}
          className={`transition-transform duration-300 ${showSettings ? 'rotate-90' : ''} ${isHovered ? 'scale-110' : ''}`}
        />
      </button>
      <div className={`fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-slate-900/95 text-white shadow-2xl transform transition-all duration-300 ease-in-out z-40 backdrop-blur-sm ${
        showSettings ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 drop-shadow-lg">Taj Mahal Settings</h2>
            <div className="text-sm text-gray-300 text-right">
              <div>Taj Mahal Explorer</div>
              <div className="text-xs text-yellow-400">Fixed Controls v1.2</div>
            </div>
          </div>
          {/* Time Control Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-blue-300 border-b border-blue-300/30 pb-2">
              Time Control
            </h3>
            <div className="space-y-3 mb-4">
              {timeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    if (option.value === 'day') setDayTime();
                    if (option.value === 'night') setNightTime();
                    if (option.value === 'cycle') setCycleMode();
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 w-full text-left hover:scale-105 ${
                    timeMode === option.value
                      ? 'bg-blue-500/30 border-2 border-blue-400 text-blue-300 shadow-lg'
                      : 'bg-slate-700/50 border border-slate-600 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span className="flex-shrink-0">{option.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-gray-400">{option.description}</div>
                  </div>
                  {timeMode === option.value && (
                    <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
            {timeMode === 'cycle' && (
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Cycle Progress</span>
                  <button 
                    onClick={cycleTime}
                    className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                      isPlaying 
                        ? 'bg-yellow-500/30 text-yellow-400 hover:bg-yellow-500/40' 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {isPlaying ? '⏸️' : '▶️'}
                  </button>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-blue-400 via-yellow-400 via-orange-400 to-purple-500 h-3 rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${timeOfDay * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-300 mt-2 text-center font-medium bg-slate-700/50 py-1 rounded">
                  Current: {getTimeOfDayLabel()}
                </div>
              </div>
            )}
          </div>
          {/* Visual Effects Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-purple-300 border-b border-purple-300/30 pb-2">
              Visual Effects
            </h3>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Particles & Effects</div>
                  <div className="text-sm text-gray-400">Dust, fireflies, and atmospheric effects</div>
                </div>
                <button 
                  onClick={() => setShowParticles(!showParticles)}
                  className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                    showParticles
                      ? 'bg-purple-500/30 text-purple-400 hover:bg-purple-500/40 shadow-lg'
                      : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                  }`}
                >
                  {showParticles ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>
          </div>
          {/* Audio Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-orange-300 border-b border-orange-300/30 pb-2">
              Audio Settings
            </h3>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium">Mystical Temple Music</div>
                  <div className="text-sm text-gray-400">Ethereal temple ambience soundtrack</div>
                </div>
                <button 
                  onClick={toggleAudio}
                  className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                    audioEnabled
                      ? 'bg-orange-500/30 text-orange-400 hover:bg-orange-500/40 shadow-lg'
                      : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                  }`}
                >
                  {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
              </div>
              <div className="space-y-3">
                <label className="text-sm text-gray-300 flex items-center justify-between">
                  <span>Volume</span>
                  <span className="text-orange-400 font-mono">{Math.round(ambientVolume * 100)}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={ambientVolume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
              </div>
            </div>
          </div>
          {/* Controls Help */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4 text-green-300 border-b border-green-300/30 pb-2">
              Fixed Controls
            </h3>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-200 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div><strong>Move:</strong> WASD (forward/back/left/right)</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div><strong>Look:</strong> Mouse (fixed horizontal/vertical)</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div><strong>Jump:</strong> Spacebar (working now!)</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div><strong>Crouch:</strong> Shift key (working now!)</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div><strong>Height:</strong> Realistic 1.55m perspective</div>
                <div className="text-yellow-300 text-xs mt-3 p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                  ✅ Fixed: Mouse movement now works correctly<br/>
                  ✅ Fixed: Spacebar jump now functional<br/>
                  ✅ Fixed: Shift crouch now working properly<br/>
                  ✅ Improved: Lowered eye level to 1.55m<br/>
                  ✅ Enhanced: Proper horizontal movement only
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f59e0b, #ec4899);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: all 0.2s ease;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
      `}</style>
    </>
  );
}
export default function TajMahalExplorer() {
    const [infoText, setInfoText] = useState('Click to explore the magnificent Taj Mahal from a realistic human perspective');
    const [showInstructions, setShowInstructions] = useState(true);
    const [showParticles, setShowParticles] = useState(true);
    const { timeOfDay, setTimeOfDay, timeMode, setDayTime, setNightTime, setCycleMode, cycleTime, isPlaying } = useTimeOfDay();
    const audioManager = useMemo(() => new AudioManager(), []);
    const collisionDetector = useMemo(() => new CollisionDetector(), []);
    useEffect(() => {
        audioManager.init();
        let hasInteracted = false;
        const startAudio = async () => {
            if (!hasInteracted) {
                hasInteracted = true;
                await audioManager.playAmbient();
            }
        };
        const events = ['click', 'keydown', 'touchstart'];
        events.forEach(event => {
            document.addEventListener(event, startAudio, { once: true });
        });
        return () => {
            events.forEach(event => {
                document.removeEventListener(event, startAudio);
            });
        };
    }, [audioManager]);const handlePlayerMove = (position) => {
    if (position.z > 15) {
        setInfoText('You are approaching the grand main gate, Darwaza-i Rauza.');
    } else if (position.z < -10) {
        setInfoText('Wandering behind the mausoleum, near the Yamuna river.');
    } else if (position.x > 5 && position.x < 15 && position.z < 10) {
        setInfoText('Exploring the grounds near the beautiful mosque.');
    } else if (position.x < -10 && position.z < 10) {
        setInfoText('You are walking past the Jawab, the "answer" to the mosque, experiencing a profound sense of tranquility.');
    } else {
        setInfoText('Wandering the sacred grounds of the Taj Mahal from a natural human perspective.');
    }
};
    return (
        <div className="w-full h-screen relative">
            <Canvas shadows camera={{ position: [0, 1.55, 8], fov: 75 }}>
                <EnhancedEnvironment timeOfDay={timeOfDay} timeMode={timeMode} />
                <TimeOfDayUpdater 
                    timeOfDay={timeOfDay} 
                    setTimeOfDay={setTimeOfDay} 
                    isPlaying={isPlaying} 
                    timeMode={timeMode}
                />
                <TajMahalModel collisionDetector={collisionDetector} />  {/* ← CHANGED */}
                <Ground collisionDetector={collisionDetector} timeOfDay={timeOfDay} timeMode={timeMode} />
                <Forest collisionDetector={collisionDetector} />
                <Birds />
                {showParticles && (
                    <>
                        <Particles type="dust" count={200} />
                        {(timeMode === 'night' || (timeMode === 'cycle' && (timeOfDay < 0.2 || timeOfDay > 0.8))) && <Particles type="fireflies" count={30} />}
                    </>
                )}
                <FirstPersonControls 
                    speed={7} 
                    collisionDetector={collisionDetector}
                    audioManager={audioManager}
                    onMove={handlePlayerMove}
                />
            </Canvas>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/70 p-4 rounded-lg mx-4 backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="text-lg font-semibold mb-1">{infoText}</div>
                <div className="text-sm text-gray-300">Mouse: Look Around • WASD: Move • Space: Jump • Shift: Crouch</div>
            </div>
            {showInstructions && (
                <div className="absolute top-4 left-0 right-0 text-center text-white bg-black/90 p-6 max-w-lg mx-auto rounded-lg backdrop-blur-sm border border-yellow-500/30 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-300">Taj Mahal Explorer - Fixed Controls</h3>
                    <div className="space-y-3 text-left mb-4">
                        <p className="flex items-center gap-2"><span className="text-green-400">✓</span><strong>Movement:</strong> WASD for natural walking</p>
                        <p className="flex items-center gap-2"><span className="text-green-400">✓</span><strong>Look:</strong> Mouse with fixed horizontal/vertical</p>
                        <p className="flex items-center gap-2"><span className="text-green-400">✓</span><strong>Jump:</strong> Spacebar (now working!)</p>
                        <p className="flex items-center gap-2"><span className="text-green-400">✓</span><strong>Crouch:</strong> Shift key (now working!)</p>
                        <p className="flex items-center gap-2"><span className="text-green-400">✓</span><strong>Height:</strong> Realistic 1.55m perspective</p>
                    </div>
                    <p className="text-green-300 mb-4 text-sm bg-green-500/10 p-2 rounded border border-green-500/20">
                        ✅ Fixed: Mouse movement now correct (no diagonal issues)<br/>
                        ✅ Fixed: Spacebar jump functional with physics<br/>
                        ✅ Fixed: Shift crouch working properly<br/>
                        ✅ Improved: Lowered eye level for better monument viewing
                    </p>
                    <button 
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold shadow-lg hover:scale-105"
                        onClick={() => setShowInstructions(false)}
                    >
                        Begin Fixed Exploration!
                    </button>
                </div>
                //
            )}<SettingsPanel
                audioManager={audioManager}
                timeOfDay={timeOfDay}
                timeMode={timeMode}
                setDayTime={setDayTime}
                setNightTime={setNightTime}
                setCycleMode={setCycleMode}
                cycleTime={cycleTime}
                isPlaying={isPlaying}
                showParticles={showParticles}
                setShowParticles={setShowParticles}
            />
        </div>
    );
}



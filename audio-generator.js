// Audio Generator for Fart Sounds
// This script uses the Web Audio API to generate synthetic fart sounds
// Each function creates a different type of fart sound

class FartSoundGenerator {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // 1. The Trumpet Soloist - a brass-like blast
    generateTrumpet() {
        const duration = 1.5;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(80, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.7, this.audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000; // Return duration in milliseconds
    }
    
    // 2. The Squeaky Door - high-pitched and drawn out
    generateSqueaky() {
        const duration = 0.8;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 3. The Foghorn - deep and resonant
    generateFoghorn() {
        const duration = 2.0;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(60, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(40, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1.0, this.audioContext.currentTime + 0.3);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 4. The Machine Gun - rapid-fire succession
    generateMachineGun() {
        const totalDuration = 1.5;
        let currentTime = this.audioContext.currentTime;
        const endTime = currentTime + totalDuration;
        
        // Create multiple short bursts
        while (currentTime < endTime) {
            const burstDuration = 0.1;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(100 + Math.random() * 50, currentTime);
            
            gainNode.gain.setValueAtTime(0, currentTime);
            gainNode.gain.linearRampToValueAtTime(0.5, currentTime + 0.01);
            gainNode.gain.linearRampToValueAtTime(0, currentTime + burstDuration);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start(currentTime);
            oscillator.stop(currentTime + burstDuration);
            
            currentTime += burstDuration + 0.05;
        }
        
        return totalDuration * 1000;
    }
    
    // 5. The Bubble Bath - wet and bubbly
    generateBubbleBath() {
        const totalDuration = 2.0;
        let currentTime = this.audioContext.currentTime;
        const endTime = currentTime + totalDuration;
        
        // Create multiple bubbles
        while (currentTime < endTime) {
            const bubbleDuration = 0.2 + Math.random() * 0.3;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(100 + Math.random() * 200, currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(50 + Math.random() * 100, currentTime + bubbleDuration);
            
            gainNode.gain.setValueAtTime(0, currentTime);
            gainNode.gain.linearRampToValueAtTime(0.2 + Math.random() * 0.2, currentTime + 0.01);
            gainNode.gain.linearRampToValueAtTime(0, currentTime + bubbleDuration);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start(currentTime);
            oscillator.stop(currentTime + bubbleDuration);
            
            currentTime += bubbleDuration * 0.8; // Overlap slightly
        }
        
        return totalDuration * 1000;
    }
    
    // 6. The Silent Assassin - barely audible
    generateSilent() {
        const duration = 1.0;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(80, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(60, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, this.audioContext.currentTime + 0.2);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 7. The Earthquake - rumbling that shakes foundations
    generateEarthquake() {
        const duration = 2.5;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const lowPassFilter = this.audioContext.createBiquadFilter();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(30, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(20, this.audioContext.currentTime + duration);
        
        lowPassFilter.type = 'lowpass';
        lowPassFilter.frequency.value = 100;
        lowPassFilter.Q.value = 10;
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1.0, this.audioContext.currentTime + 0.5);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(lowPassFilter);
        lowPassFilter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 8. The Whoopee Cushion - a classic sound
    generateWhoopee() {
        const duration = 1.0;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(150, this.audioContext.currentTime + duration);
        
        // Add vibrato for the whoopee cushion effect
        const vibratoOsc = this.audioContext.createOscillator();
        const vibratoGain = this.audioContext.createGain();
        vibratoOsc.type = 'sine';
        vibratoOsc.frequency.value = 20;
        vibratoGain.gain.value = 50;
        vibratoOsc.connect(vibratoGain);
        vibratoGain.connect(oscillator.frequency);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, this.audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        vibratoOsc.start();
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        vibratoOsc.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 9. The Balloon Deflation - letting air out
    generateBalloon() {
        const duration = 2.0;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(500, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + duration * 0.8);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 10. The Tuba Player - deep and musical
    generateTuba() {
        const duration = 1.8;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(80, this.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(60, this.audioContext.currentTime + 0.2);
        oscillator.frequency.setValueAtTime(40, this.audioContext.currentTime + 0.4);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.8, this.audioContext.currentTime + 0.2);
        gainNode.gain.linearRampToValueAtTime(0.6, this.audioContext.currentTime + 0.4);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 11. The Motorboat - rapid vibrations
    generateMotorboat() {
        const duration = 1.5;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(50, this.audioContext.currentTime);
        
        // Add rapid modulation for motorboat effect
        const modulatorOsc = this.audioContext.createOscillator();
        const modulatorGain = this.audioContext.createGain();
        modulatorOsc.type = 'square';
        modulatorOsc.frequency.value = 15;
        modulatorGain.gain.value = 30;
        modulatorOsc.connect(modulatorGain);
        modulatorGain.connect(oscillator.frequency);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.7, this.audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        modulatorOsc.start();
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        modulatorOsc.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 12. The Duck Call - quacking sound
    generateDuck() {
        const duration = 0.7;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(200, this.audioContext.currentTime + duration);
        
        // Add quack modulation
        const quackOsc = this.audioContext.createOscillator();
        const quackGain = this.audioContext.createGain();
        quackOsc.type = 'square';
        quackOsc.frequency.value = 10;
        quackGain.gain.value = 100;
        quackOsc.connect(quackGain);
        quackGain.connect(oscillator.frequency);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.4, this.audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        quackOsc.start();
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        quackOsc.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 13. The Thunderclap - sudden explosive sound
    generateThunder() {
        const duration = 1.2;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const distortion = this.audioContext.createWaveShaper();
        
        function makeDistortionCurve(amount) {
            const k = amount;
            const n_samples = 44100;
            const curve = new Float32Array(n_samples);
            const deg = Math.PI / 180;
            
            for (let i = 0; i < n_samples; ++i) {
                const x = i * 2 / n_samples - 1;
                curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
            }
            return curve;
        }
        
        distortion.curve = makeDistortionCurve(400);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(100, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(20, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(1.0, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.connect(distortion);
        distortion.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // 14. The Whisper - soft but insistent
    generateWhisper() {
        const duration = 1.0;
        const noise = this.audioContext.createBufferSource();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Create noise
        const bufferSize = this.audioContext.sampleRate * duration;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        noise.buffer = buffer;
        
        filter.type = 'bandpass';
        filter.frequency.value = 300;
        filter.Q.value = 1;
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, this.audioContext.currentTime + 0.2);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        noise.start();
        
        return duration * 1000;
    }
    
    // 15. The Grand Finale - the crescendo
    generateFinale() {
        const duration = 3.0;
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const distortion = this.audioContext.createWaveShaper();
        
        function makeDistortionCurve(amount) {
            const k = amount;
            const n_samples = 44100;
            const curve = new Float32Array(n_samples);
            const deg = Math.PI / 180;
            
            for (let i = 0; i < n_samples; ++i) {
                const x = i * 2 / n_samples - 1;
                curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
            }
            return curve;
        }
        
        distortion.curve = makeDistortionCurve(200);
        
        oscillator1.type = 'sawtooth';
        oscillator1.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator1.frequency.linearRampToValueAtTime(40, this.audioContext.currentTime + duration);
        
        oscillator2.type = 'square';
        oscillator2.frequency.setValueAtTime(153, this.audioContext.currentTime); // Slightly detuned for effect
        oscillator2.frequency.linearRampToValueAtTime(38, this.audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.8, this.audioContext.currentTime + 0.5);
        gainNode.gain.linearRampToValueAtTime(1.0, this.audioContext.currentTime + 1.0);
        gainNode.gain.linearRampToValueAtTime(0.6, this.audioContext.currentTime + 2.0);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator1.connect(distortion);
        oscillator2.connect(distortion);
        distortion.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator1.start();
        oscillator2.start();
        oscillator1.stop(this.audioContext.currentTime + duration);
        oscillator2.stop(this.audioContext.currentTime + duration);
        
        return duration * 1000;
    }
    
    // Play a specific fart sound by name
    playSound(soundName) {
        let duration = 0;
        
        switch(soundName) {
            case 'trumpet':
                duration = this.generateTrumpet();
                break;
            case 'squeaky':
                duration = this.generateSqueaky();
                break;
            case 'foghorn':
                duration = this.generateFoghorn();
                break;
            case 'machinegun':
                duration = this.generateMachineGun();
                break;
            case 'bubblebath':
                duration = this.generateBubbleBath();
                break;
            case 'silent':
                duration = this.generateSilent();
                break;
            case 'earthquake':
                duration = this.generateEarthquake();
                break;
            case 'whoopee':
                duration = this.generateWhoopee();
                break;
            case 'balloon':
                duration = this.generateBalloon();
                break;
            case 'tuba':
                duration = this.generateTuba();
                break;
            case 'motorboat':
                duration = this.generateMotorboat();
                break;
            case 'duck':
                duration = this.generateDuck();
                break;
            case 'thunder':
                duration = this.generateThunder();
                break;
            case 'whisper':
                duration = this.generateWhisper();
                break;
            case 'finale':
                duration = this.generateFinale();
                break;
            default:
                console.error('Unknown sound:', soundName);
                return 0;
        }
        
        return duration;
    }
}

// Export the generator
window.FartSoundGenerator = FartSoundGenerator;

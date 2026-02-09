// ===================================================================
// WARZONE RESILIENCE - VR DISASTER TRAINING PLATFORM
// Main JavaScript File
// ===================================================================

// ===================================================================
// MODAL FUNCTIONS
// ===================================================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// ===================================================================
// FORM HANDLERS
// ===================================================================

function handleLogin(event) {
    event.preventDefault();
    showNotification('✅ Login Successful!', 'Welcome back to Warzone Resilience', 'success');
    closeModal('login');
}

function handleRegister(event) {
    event.preventDefault();
    showNotification('🎉 Registration Complete!', 'Welcome to Warzone Resilience! Start your training journey.', 'success');
    closeModal('register');
}

// ===================================================================
// NAVIGATION & SCROLL
// ===================================================================

function scrollToModules() {
    const modulesSection = document.getElementById('modules');
    if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===================================================================
// AI ASSISTANT FUNCTIONS
// ===================================================================

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    
    if (!message) return;

    // Add user message
    const container = document.getElementById('aiChatContainer');
    if (!container) return;
    
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message ai-user';
    userMsg.innerHTML = message;
    container.appendChild(userMsg);
    
    input.value = '';

    // Simulate AI response
    setTimeout(() => {
        const response = getAIResponse(message);
        const botMsg = document.createElement('div');
        botMsg.className = 'ai-message ai-bot';
        botMsg.innerHTML = response;
        container.appendChild(botMsg);
        container.scrollTop = container.scrollHeight;
    }, 1000);
}

function askAI(question) {
    const input = document.getElementById('aiInput');
    if (input) {
        input.value = question;
        sendAIMessage();
    }
}

function getAIResponse(question) {
    const q = question.toLowerCase();
    
    // Earthquake tips
    if (q.includes('भूकंप') || q.includes('earthquake')) {
        return `
            <strong>🏚️ भूकंप के दौरान सुरक्षा टिप्स / Earthquake Safety Tips:</strong><br><br>
            1. <strong>Drop, Cover, Hold</strong> - झुकें, ढकें, पकड़ें<br>
            2. किसी मजबूत मेज के नीचे छिपें / Hide under a strong table<br>
            3. खिड़कियों और शीशे से दूर रहें / Stay away from windows<br>
            4. भूकंप रुकने के बाद बाहर निकलें / Exit after shaking stops<br>
            5. लिफ्ट का उपयोग न करें / Don't use elevators<br>
            6. खुली जगह में जाएं / Go to open area<br><br>
            💡 याद रखें: घबराएं नहीं, शांत रहें!
        `;
    }
    
    // Flood tips
    if (q.includes('बाढ़') || q.includes('flood')) {
        return `
            <strong>🌊 बाढ़ से बचाव टिप्स / Flood Safety Tips:</strong><br><br>
            1. ऊंची जगह पर जाएं / Move to higher ground<br>
            2. बहते पानी में न चलें / Don't walk in flowing water<br>
            3. जरूरी दस्तावेज प्लास्टिक बैग में रखें / Keep documents in plastic<br>
            4. बिजली के खंभों से दूर रहें / Stay away from electric poles<br>
            5. आपातकालीन किट तैयार रखें / Keep emergency kit ready<br>
            6. सरकारी निर्देशों का पालन करें / Follow govt instructions<br><br>
            💡 याद रखें: 6 इंच पानी भी खतरनाक हो सकता है!
        `;
    }
    
    // Fire tips
    if (q.includes('आग') || q.includes('fire')) {
        return `
            <strong>🔥 आग लगने पर टिप्स / Fire Safety Tips:</strong><br><br>
            1. तुरंत अलार्म बजाएं / Sound the alarm immediately<br>
            2. नीचे झुककर चलें (धुएं से बचें) / Crawl low under smoke<br>
            3. दरवाजे छूकर गर्मी जांचें / Check door for heat<br>
            4. सबसे नजदीकी निकास से बाहर जाएं / Use nearest exit<br>
            5. लिफ्ट का उपयोग न करें / Never use elevators<br>
            6. बाहर निकलने के बाद वापस न जाएं / Don't go back inside<br><br>
            💡 याद रखें: STOP, DROP, and ROLL अगर कपड़ों में आग लगे!
        `;
    }
    
    // Landslide tips
    if (q.includes('भूस्खलन') || q.includes('landslide')) {
        return `
            <strong>⛰️ भूस्खलन से बचाव टिप्स / Landslide Safety Tips:</strong><br><br>
            1. चेतावनी के संकेत पहचानें / Recognize warning signs<br>
            2. धरती में दरारें दिखें तो सतर्क रहें / Watch for cracks<br>
            3. पहाड़ी इलाकों में बारिश के दौरान सावधान / Caution during rain<br>
            4. तुरंत ऊंची जगह पर जाएं / Move to higher ground<br>
            5. पहाड़ी के नीचे न रहें / Don't stay below slopes<br>
            6. भूस्खलन के रास्ते से दूर रहें / Stay away from path<br><br>
            💡 याद रखें: असामान्य आवाज़ सुनें - यह चेतावनी हो सकती है!
        `;
    }
    
    // Emergency contacts
    if (q.includes('emergency') || q.includes('आपातकाल') || q.includes('help') || q.includes('मदद')) {
        return `
            <strong>🚨 आपातकालीन संपर्क / Emergency Contacts:</strong><br><br>
            📞 Emergency: <strong>112</strong> (All India)<br>
            🚒 Fire Brigade: <strong>101</strong><br>
            🚑 Ambulance: <strong>102</strong><br>
            👮 Police: <strong>100</strong><br>
            🌊 Disaster Management: <strong>108</strong><br><br>
            <strong>हमसे संपर्क करें:</strong><br>
            📱 Warzone Support: <strong>+91 7252016402</strong><br><br>
            💡 शांत रहें और मदद के लिए फोन करें!
        `;
    }
    
    // Default response
    return `
        <strong>मैं आपकी मदद करूंगा! / I can help you!</strong><br><br>
        कृपया चुनें / Please choose:<br><br>
        <div class="ai-quick-tips">
            <button class="quick-tip-btn" onclick="askAI('भूकंप के दौरान क्या करें?')">🏚️ भूकंप</button>
            <button class="quick-tip-btn" onclick="askAI('बाढ़ से कैसे बचें?')">🌊 बाढ़</button>
            <button class="quick-tip-btn" onclick="askAI('आग लगने पर क्या करें?')">🔥 आग</button>
            <button class="quick-tip-btn" onclick="askAI('भूस्खलन से बचाव?')">⛰️ भूस्खलन</button>
            <button class="quick-tip-btn" onclick="askAI('Emergency numbers')">🚨 Emergency</button>
        </div>
    `;
}

// ===================================================================
// ADMIN PANEL FUNCTIONS
// ===================================================================

function openAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.add('active');
        showNotification('🔐 Admin Access', 'Welcome to Admin Control Panel', 'info');
    }
}

function closeAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.remove('active');
    }
}

function handleAddScenario(event) {
    event.preventDefault();
    showNotification('✅ Scenario Added', 'New VR disaster scenario has been added successfully!', 'success');
    event.target.reset();
}

// ===================================================================
// CONTACT FUNCTIONS
// ===================================================================

function callNumber() {
    window.location.href = 'tel:+917252016402';
}

function sendEmail() {
    window.location.href = 'mailto:support@warzoneresilience.com?subject=Warzone Resilience Inquiry&body=Hello Warzone Team,';
}

function openWhatsApp() {
    window.open('https://wa.me/917252016402?text=Hello%20Warzone%20Resilience!%20I\'m%20interested%20in%20VR%20disaster%20training.', '_blank');
}

// ===================================================================
// NOTIFICATION SYSTEM
// ===================================================================

function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const bgColor = type === 'success' 
        ? 'linear-gradient(135deg, #00ff88, #00d4ff)' 
        : type === 'error' 
        ? 'linear-gradient(135deg, #ff006e, #ff5722)' 
        : 'linear-gradient(135deg, #00fff5, #00d4ff)';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: ${bgColor};
        color: #000;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        z-index: 10000;
        min-width: 300px;
        max-width: 400px;
        animation: slideInRight 0.5s ease-out;
        font-family: 'Exo 2', sans-serif;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">${title}</div>
        <div style="font-size: 0.95rem; opacity: 0.9;">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ===================================================================
// SCROLL ANIMATIONS
// ===================================================================

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

// ===================================================================
// INITIALIZE
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Observe cards for animation
    document.querySelectorAll('.stat-card, .module-card, .feature-card').forEach(card => {
        observer.observe(card);
    });
    
    // Welcome message
    setTimeout(() => {
        showNotification(
            '🎮 Welcome to Warzone Resilience!', 
            'Experience cutting-edge VR disaster training platform', 
            'info'
        );
    }, 1500);
});

console.log('🎮 Warzone Resilience - JavaScript Loaded Successfully!');
console.log('📞 Contact: +91 7252016402');

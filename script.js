const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

function toggleMobileMenu(show) {
    if (show) {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

mobileMenuButton.addEventListener('click', () => toggleMobileMenu(true));
closeMobileMenu.addEventListener('click', () => toggleMobileMenu(false));
mobileMenuBackdrop.addEventListener('click', () => toggleMobileMenu(false));

const commandSearch = document.getElementById('command-search');
const commandsList = document.getElementById('commands-list');

const commands = [
    { name: "/play", description: "Play music from various sources" },
    { name: "/skip", description: "Skip the current track" },
    { name: "/pause", description: "Pause music playback" },
    { name: "/resume", description: "Resume music playback" },
    { name: "/queue", description: "Display the current music queue" },
    { name: "/clear", description: "Clear the music queue" },
    { name: "/ban", description: "Ban a user from the server" },
    { name: "/kick", description: "Kick a user from the server" },
    { name: "/mute", description: "Mute a user" },
    { name: "/unmute", description: "Unmute a user" },
];

function renderCommands(filteredCommands) {
    commandsList.innerHTML = '';
    filteredCommands.forEach(command => {
        const commandElement = document.createElement('div');
        commandElement.className = 'command-card';
        commandElement.innerHTML = `
                <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <h3 class="text-lg font-semibold">${command.name}</h3>
                </div>
                <p class="text-muted-foreground">${command.description}</p>
            `;
        commandsList.appendChild(commandElement);
    });
}

renderCommands(commands);

commandSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCommands = commands.filter(command =>
        command.name.toLowerCase().includes(searchTerm) ||
        command.description.toLowerCase().includes(searchTerm)
    );
    renderCommands(filteredCommands);
});

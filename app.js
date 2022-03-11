window.addEventListener('DOMContentLoaded', () => {
	const platform = process.platform;
	document.getElementById('text-platform').innerHTML = platform.charAt(0).toUpperCase() + platform.slice(1);
	document.getElementById('text-version').innerHTML = process.getSystemVersion();
	document.getElementById('text-arch').innerHTML = process.arch;
});
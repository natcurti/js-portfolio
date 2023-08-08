async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/natcurti/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    const profileData = await fetching.json();
    return profileData;

}
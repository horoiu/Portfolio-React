export function readLocalStorage() {
    console.log("Inside readLocalStorage()");
    const projectsList = localStorage.getItem("projectsList");
    return projectsList;
}

export function setLocalStorage(key, value) {
    console.log("Inside setLocalStorage()");
    localStorage.setItem(key, JSON.stringify(value));
}

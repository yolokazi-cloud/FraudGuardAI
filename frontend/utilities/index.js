const capitalizeNames = (str) => {
    const words = str.toLowerCase().split('-');
    const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    return capitalized;
};

export default capitalizeNames;
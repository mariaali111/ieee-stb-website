// Automatically loads all images from src/profile-pic/
const profilePictures = import.meta.glob("../profile-pic/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getProfileImage(name) {
  const fileName = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const imageEntry = Object.entries(profilePictures).find(([path]) => {
    const pathFileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png|webp)$/i, "");
    return pathFileName === fileName;
  });

  return imageEntry ? imageEntry[1] : null;
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

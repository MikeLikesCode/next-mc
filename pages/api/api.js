
export const getSkin = (data) => {
  const rawSkinData = atob(data.properties[0].value);
  const skinData = JSON.parse(rawSkinData);
  console.log(skinData.textures.SKIN.url);
}


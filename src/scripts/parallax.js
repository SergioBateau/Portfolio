const parallax = document.querySelector('.parallax')
const layers = parallax.children;

const layersToExclude = [1, 4, 5];

function moveLayersDependsOnScroll(wscroll) {
  Array.from(layers).forEach((layer, layerIndex) => {
    const strafe = `${wscroll / (-layerIndex * 70)}%`;
    if (layersToExclude.includes(layerIndex) === false) {
      layer.style.transform = `translateY(${strafe})`;
    }
  });
}

const windowWidth = document.body.clientWidth;

if (windowWidth > 768) {
window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
});
}
export function getPageScroller() {
  const isMobile = window.innerWidth < 1024

  return isMobile ? '#page-scroll' : window
}
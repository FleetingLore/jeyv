document$.subscribe(function() {
  const tikzElements = document.querySelectorAll('.tikz');
  
  if (tikzElements.length > 0 && typeof window.tikzjax !== 'undefined') {
    window.tikzjax.process();
  }
});
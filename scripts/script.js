// const portfolio_container = document.getElementById('portfolio-cards');

// portfolio_container.addEventListener('mousedown', (e) => {
//     let startX = e.pageX;
//     let isDragging = true;

//     function handleMouseMove(e) {
//       if (!isDragging) {
//         return;
//       }
//       const x = e.pageX - startX;
//       container.scrollLeft += x;
//     }
//     document.addEventListener("mousemove", handleMouseMove);

//     function handleMouseUp() {
//       isDragging = false;
//       document.removeEventListener("mousemove", handleMouseMove);
//     }

//     document.addEventListener("mouseup", handleMouseUp);
// });
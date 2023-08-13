document.addEventListener('DOMContentLoaded', () => {
    const picPairs = document.querySelectorAll('.pic-pair');

    picPairs.forEach((pair) => {
        const leftPic = pair.querySelector('.left-pic');
        const rightPic = pair.querySelector('.right-pic');

        rightPic.addEventListener('mouseover', () => {
            // Hide any previously displayed left pics
            document.querySelectorAll('.left-pic').forEach(img => {
                img.style.display = 'none';
            });
            
            // Show the current left pic
            leftPic.style.display = 'block';
        });

        rightPic.addEventListener('mouseout', () => {
            leftPic.style.display = 'none';
        });
    });
});

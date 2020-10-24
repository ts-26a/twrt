function main() {
    const quoteRetweetButtons = document.querySelectorAll('div[data-testid="retweet"]');
    let retweetButton;
    quoteRetweetButtons.forEach((element) => {
        element.addEventListener('click', (event) => {
            if (event.isTrusted) {
                setTimeout(() => {
                    retweetButton = document.querySelector('div[data-testid="tweetButton"]');
                    if (retweetButton !== null) {
                        retweetButton.click();
                    }
                }, 50);
            }
        });
        element.oncontextmenu = () => {
            element.click();
            return false;
        };
    });
}


setInterval(main, 500);

const video = document.querySelector('video');
        const button = document.querySelector('button');

class MediaPlayer {
    media:HTMLMediaElement;
    plugins:Array<any>;
    container: HTMLElement;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container , this.media);
        this.container.appendChild(this.media)
    }
    private initPlugins() {
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     },
        // };



        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();

        }

    }
    //MediaPlayer.prototype.play = function() {
    //    this.media.play();
    //  };
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    MuteUnmute() {
        this.media.muted = !this.media.muted;
    }
}

        export default MediaPlayer
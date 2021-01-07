import { createCanvas, loadImage } from 'canvas';
import type { Canvas, CanvasRenderingContext2D } from 'canvas';
import type { GuildMember } from 'discord.js';
import Util from './Util';

export class PlayUnityImage {

    private canvas: Canvas;
    private context: CanvasRenderingContext2D;
    private member: GuildMember;

    constructor (member: GuildMember) {

        this.canvas = createCanvas(1022, 448);
        this.context = this.canvas.getContext('2d');

        this.member = member;

    }

    async applyBackground () {

        // Black background
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply Play Unity background
        let background = await loadImage(`${__dirname}/../assets/play-unity-bg.png`);
        this.context.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);

    }

    async applyWelcomeText () {

        this.context.font = '83.54px PoppinsSemibold';
        this.context.fillStyle = '#FFFFFF';
        this.context.fillText('Bienvenue', 65.51, 158.98+83.54);

        this.context.font = '17.69px PoppinsRegular';
        this.context.fillStyle = '#005AFE';
        this.context.fillText('PlayUnity.net', 70.28, 245.99+17.69)

    }

    async applyJoinPlace (joinPlace: string) {

        this.context.font = '20.49px PoppinsRegular';
        this.context.fillStyle = '#FFFFFF';
        this.context.fillText(`${joinPlace}e MEMBRE`, 34.2, 394.11+20.49);

    }

    async applyAvatarIcon (avatarURL: string) {

        this.context.beginPath();
        this.context.lineWidth = 4;
        this.context.strokeStyle = '#FFFFFF';
        const radius = 210/2;
        this.context.arc(628+radius, 119+radius, radius, 0, Math.PI * 2, true);
        this.context.stroke();
        this.context.closePath();
        this.context.clip();
        console.log(avatarURL)
        const avatar = await loadImage(avatarURL);
        this.context.drawImage(avatar, 33, 71, 104, 124, 21, 20, 87, 104);

        console.log('applied')
    }

    async buffer () {

        await this.applyBackground();
        await this.applyWelcomeText();

        const { joinPlace, avatarURL, username, discriminator } = Util.extractMemberInfos(this.member);

        await this.applyJoinPlace(joinPlace);
        await this.applyAvatarIcon(avatarURL);

        return await this.canvas.toBuffer();

    }

};

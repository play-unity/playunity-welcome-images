import type { CanvasRenderingContext2D } from 'canvas';
import type { GuildMember } from 'discord.js';

interface ExtractedMemberInfos {
    joinPlace: string;
    avatarURL: string;
    username: string;
    discriminator: string;
};

export default class Util {

    static extractMemberInfos (member: GuildMember): ExtractedMemberInfos {
        const avatarURL = member.user.displayAvatarURL().split('.');
        avatarURL.pop();
        avatarURL.push('png');
        return {
            joinPlace: member.guild.memberCount.toString(),
            avatarURL: avatarURL.join('.'),
            username: member.user.username,
            discriminator: member.user.discriminator
        }
    }

    static applyText (context: CanvasRenderingContext2D, text: string, defaultFontSize: number, width: number, font: string) {
        do {
            context.font = `${(defaultFontSize -= 1)}px ${font}`;
        } while (context.measureText(text).width > width);
        return context.font;
    }

}

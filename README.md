# PlayUnity Welcome Images

## Example

```js
const { PlayUnityImage, GTAImage, RedDeadImage } = require('playunity-welcome-images');

client.on('guildMemberAdd', async (member) => {

    const image = new PlayUnityImage(member);
    const buffer = await image.toBuffer();
    
    client.channels.cache.get('ID').send(buffer);

});
```

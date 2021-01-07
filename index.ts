import { registerFont } from 'canvas';

// Register fonts used in the images
registerFont(`${__dirname}/fonts/Poppins-Regular.ttf`, {
    family: 'PoppinsRegular'
});
registerFont(`${__dirname}/fonts/Poppins-SemiBold.ttf`, {
    family: 'PoppinsSemibold'
});

export * from './src/PlayUnity';

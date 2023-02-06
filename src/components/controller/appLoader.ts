import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '31fa116694a444dbb26fbec3c708a385',
        });
    }
}

export default AppLoader;

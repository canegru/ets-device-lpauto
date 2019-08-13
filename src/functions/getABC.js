import '../helper/user-agent-parser';

function getABC() {
    try {
        if (window.lpTag.section === '') {
            window.lpTag.section = [];
        }
        const ua = new window.UAParser();
        const os = ua.getOS();
        const device = ua.getDevice();
        os.lpClientVersion = `${os.version.split('.')[0]}.${os.version.split('.')[1]}`;
        console.log(`os: ${os.name}`);
        console.log(`version: ${os.lpClientVersion}`);
        if (os.name === 'iOS' && Number(os.lpClientVersion) >= 11.3) {
            console.log('ABC compatible!');
            window.lpTag.section.push('ABC');
        } else if (os.name === 'iOS' && Number(os.lpClientVersion) <= 11.1) {
            console.log('device not compatible!');
            window.lpTag.section.push('unsupportedDevice');
        }
        if (device.type === 'mobile' || device.type === 'tablet') {
            window.lpTag.section.push(device.type);
        } else {
            window.lpTag.section.push('desktop');
        }
    } catch (e) {
        console.log(e);
        window.lpTag.section.push('desktop');
    }
}

export default getABC;


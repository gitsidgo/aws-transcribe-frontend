import axios from 'axios';

async function getTranscribeCredentials() {
    const getCredentialsUrl = 'http://www.my-backend.com/creds';
    const config = {
      method: 'post',
      url: getCredentialsUrl
    };

    const resp = await axios(config)
//    console.log(resp);

    return resp.data;
}

export default function getCredentials() {
    return getTranscribeCredentials();
}
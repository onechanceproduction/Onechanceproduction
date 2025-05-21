import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'djhzd27ew', // your cloud name
  },
});

export default cld;

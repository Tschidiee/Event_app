/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        "API_BASEURL": process.env.API_BASEURL,
        "BASEURL":process.env.BASEURL
    },

    images: {
        domains: ['']
    },
    
}

module.exports = nextConfig


const withVideos = require("next-videos");
module.exports = withVideos();
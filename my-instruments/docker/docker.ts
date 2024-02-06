const docker = {
    version: 'Show info about client and server(daemon) docker',                         // docker version
    ps: 'Show lists of running containers',                                              // docker ps -a
    "ps -a": 'Show lists of running and stopped containers',                             // docker ps -a
    images: 'Show list of local images',                                                 // docker images
    run: 'Create and unwrap new container. Need to specify image after command "run"',   // docker run 'image-name:tag'
    pull: 'Download image from docker hub. Need to specify image after command "pull"',  // docker pull 'image-name:tag'
    rm: 'Remove existing container. Need to specify id after command "rm"',              // docker rm 'container-id'
}
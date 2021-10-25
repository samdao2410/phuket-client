def build(badge, service_name){
    try {
        if(env.BRANCH_NAME != "main")
        {
            def image_name = service_name + '-' + env.BRANCH_NAME
            sh "docker build --target production -f Dockerfile -t ${image_name} . --network=host"
        }
        else
        {
            sh "docker build --target production -f Dockerfile -t ${service_name} . --network=host"
        }
    } catch (Exception err) {
        badge.setStatus('failing')
        badge.setColor('red')
        badge "${service_name} build failed"
    }
}

return this

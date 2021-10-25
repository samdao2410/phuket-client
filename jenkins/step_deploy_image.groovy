def push(badge, service_name){
    try {
        if(env.BRANCH_NAME != "main")
        {
            service_name = service_name + '-' + env.BRANCH_NAME
        }
        withDockerRegistry([credentialsId: 'docker-registry', url: "http://registry.fb88.company/"]) {
            sh "docker tag ${service_name} registry.fb88.company/${service_name}:1.0"
            sh "docker push registry.fb88.company/${service_name}:1.0"
        }
    } catch (Exception err) {
        badge.setStatus('failing')
        badge.setColor('red')
        error "${service_name} image failed"
    }
    badge.setStatus('passing')
}

return this
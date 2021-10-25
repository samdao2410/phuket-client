#!/usr/bin/env groovy

def phuketBadge = addEmbeddableBadgeConfiguration(id: "webphuket", status: "passing",subject: "Jenkins Piplines")

def modules = [:] 
pipeline {
    agent any
    parameters {
        booleanParam(name: 'webphuket', defaultValue: false, description: '')
        booleanParam(name: 'isDeploy', defaultValue: false, description: '')
    }
    
    stages {
        stage('Initialize the variables') {
            steps{
                script{
                    modules.step_build = load "./jenkins/step_build.groovy"
                    modules.step_deploy_image = load "./jenkins/step_deploy_image.groovy"
                }
            }   
        }

        stage('Build') {
            parallel {
                stage('WebPhuket') {
                    when {
                        beforeAgent true
                        expression { params.webphuket }
                    }
                    steps {
                        script {
                            modules.step_build.build(phuketBadge, 'webphuket')
                        }
                    }
                }
            }
        }

        stage('Deploy Image') {
            parallel {
                stage('WebPhuket') {
                    when {
                        beforeAgent true
                        expression { params.webphuket }
                    }
                    steps {
                        script {
                            modules.step_deploy_image.push(phuketBadge, 'webphuket')
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                beforeAgent true
                expression { params.isDeploy }
            }
            steps {
                script {
                    def remote = [:]
                    remote.name = "sev-uat"
                    remote.host = "222.127.31.211"
                    remote.port = 2234
                    remote.allowAnyHosts = true
                    
                    withCredentials([sshUserPrivateKey(credentialsId: 'jenkins-ssh', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'jenkins')]) {
                        remote.user = jenkins
                        remote.identityFile = identity
                        
                        //sshCommand remote: remote, command: 'docker service ls; exit'
                        sshCommand remote: remote, command: 'cd /home/bed/main-deployment; docker stack deploy --with-registry-auth -c stack-main.uat.yml -c stack-main.uat.override.yml main; sleep 5; docker service ls; exit'
                    }
                }
            }
        }
    }
    post {
        // Clean after build
        always {
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true,
                    patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                               [pattern: '.propsfile', type: 'EXCLUDE']])
        }
    }
}
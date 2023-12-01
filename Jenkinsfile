pipeline {
    agent any

    environment {
        SSH_USER = 'ec2-user'
        EC2_HOST = 'ec2-3-89-76-189.compute-1.amazonaws.com'
    }

    tools{
        maven 'maven-3.6'
        nodejs 'nodeJs'
    }

    stages {

        stage('Build Angular App') {
            steps {
                script {
                    echo 'Building the Angular application'
                    dir('Angular') {
                        sh 'npm install'
                        sh 'npm install -g @angular/cli'
                        sh 'ng build'
                    }
                }
            }
        }

        stage('build jar') {
            steps {
                script{
                    echo 'Building the Spring boot application'
                    dir('SpringBoot') {
                        sh 'mvn clean package spring-boot:repackage'
                    }
                }
            }
        }

     stage('build image') {
            steps {
                script{
                    echo 'building the docker image'
                    withCredentials([usernamePassword(credentialsId:'docker-hub-repo', passwordVariable:'PASS',usernameVariable:'USER')]){
                        sh 'docker build -t  mariem2/springboot ./SpringBoot/'
                        sh "echo $PASS | docker login -u $USER --password-stdin "
                        sh 'docker push mariem2/springboot'

                        sh 'docker build -t  mariem2/angular ./Angular/'
                        sh 'docker push mariem2/angular'
                    }
                }
            }
        }
        
        stage('Connect to EC2') {
             steps {
                 sshagent(['ec2-server-key']) {
                      sh "ssh -o StrictHostKeyChecking=no ${SSH_USER}@${EC2_HOST}"
                }
            }
        }
        stage('Pull Docker image') {
            steps {
                sshagent(['ec2-server-key']) {
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker container rm -f springboot"
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker container rm -f angular"
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker rmi \$(docker images -a -q) >/dev/null 2>&1 || true"
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker pull  mariem2/springboot:latest"
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker pull  mariem2/angular:latest"
                }
            }
        }
        stage('Run Docker container') {
            steps {
                sshagent(['ec2-server-key']) {
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker network create my-network >/dev/null 2>&1 || true"
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker run  --name springboot  --network my-network --hostname springboot -d  -p 8081:8081   mariem2/springboot:latest"
                    sh "ssh ${SSH_USER}@${EC2_HOST} docker run --restart always  --name angular  --network my-network --hostname angular  -d -p 4200:4200   mariem2/angular:latest"
                }
            }
        }
    }
}

        // stage('provision server') {
        //     environment {
        //         AWS_ACCESS_KEY_ID = credentials('jenkins_aws_access_key_id')
        //         AWS_SECRET_ACCESS_KEY = credentials('jenkins_aws_secret_access_key')
        //         AWS_SESSION_TOKEN = credentials('jenkins_aws_access_token')
        //         TF_VAR_env_prefix = 'test'
        //     }
        //     steps {
        //         script {
        //             dir('terraform') {
        //                 sh "terraform init"
        //                 sh "terraform apply --auto-approve"
        //             }
        //         }
        //     }
        // }
        
        // stage('Connect to Bastion Host') {
        //     steps {
        //         sshagent(['ec2-server-key']) {
        //             sh "ssh -o StrictHostKeyChecking=no ${SSH_USER}@${BASTION_HOST_PUBLIC_IP}"
        //         }
        //     }
        // }
        // stage('Connect to EC2') {
        //     steps {
        //         sshagent(['ec2-server-key']) {
        //             script {
        //             dir('terraform') {
        //                 EC2_PRIVATE_IPS = sh (
        //                     script: "terraform output ec2_private_ips",
        //                     returnStdout: true
        //                     ).trim()
        //                 }
        //             }
        //             sh "ssh -o StrictHostKeyChecking=no -J ${SSH_USER}@${BASTION_HOST_PUBLIC_IP} ${SSH_USER}@${EC2_PRIVATE_IPS}"
        //         }
        //     }
        // }
        // stage('deploy') {
        //     steps { 
        //         script {
        //             echo "waiting EC2 to initialize"
        //             sleep(time: 90, unit: "SECONDS")

        //             echo "${EC2_PUBLIC_IP}"

        //             sshagent(['ec2-server-key']) {
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker container rm -f springboot"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker container rm -f angular"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker rmi \$(docker images -a -q) >/dev/null 2>&1 || true"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker pull  mariem2/springboot:latest"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker pull  mariem2/angular:latest"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker network create my-network >/dev/null 2>&1 || true"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker run --name springboot --network my-network --hostname springboot -d -p 8081:8081 mariem2/springboot:latest"
        //                 sh "ssh ${SSH_USER}@${EC2_PUBLIC_IP} docker run --name angular --network my-network --hostname angular -d -p 4200:80 mariem2/angular:latest"
        //             }
        //         }
        //     }
        // }
//     }
// }
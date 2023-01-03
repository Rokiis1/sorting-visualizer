pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t sorting-visualizer .'
            }
        }
        stage('Tag') {
            steps {
                sh 'docker tag sorting-visualizer:latest 184489571052.dkr.ecr.eu-west-2.amazonaws.com/sorting-visualizer:latest'
            }
        }
        stage('Push') {
            steps {
                sh 'aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 184489571052.dkr.ecr.eu-west-2.amazonaws.com'
                sh 'docker push 184489571052.dkr.ecr.eu-west-2.amazonaws.com/sorting-visualizer:latest'
            }
        }
    }
}

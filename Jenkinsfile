pipeline {
  agent any
  stages {
    stage('Checkoute code') {
      steps {
        git(url: 'https://github.com/Rokiis1/sorting-visualizer', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh 'sudo "password" | sudo -S docker build -f Dockerfile .'
      }
    }

  }
}
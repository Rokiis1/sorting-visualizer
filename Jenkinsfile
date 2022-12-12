pipeline {
  agent any
  stages {
    stage('Checkoute code ') {
      steps {
        git(url: 'https://github.com/Rokiis1/sorting-visualizer', branch: 'main')
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -f Dockerfile .'
      }
    }

  }
}
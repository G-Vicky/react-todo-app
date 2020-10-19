pipeline {
  agent any
  stages {
    stage('Code Coverage') {
      steps {
        echo 'Code is completed'
      }
    }

    stage('Testing') {
      steps {
        echo 'Testing...'
      }
    }

    stage('Deployment') {
      steps {
        waitUntil(quiet: true)
      }
    }

  }
}
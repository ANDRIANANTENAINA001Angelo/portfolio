pipeline {
    agent any

    options {
        timestamps()
        skipDefaultCheckout(false)
    }

    triggers {
        pollSCM('H/5 * * * *')  // Vérifie toutes les 5 minutes
    }

    stages {

        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/deploy']],
                    userRemoteConfigs: [[url: 'https://github.com/ANDRIANANTENAINA001Angelo/portfolio.git']]
                ])
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Preview (Local demo)') {
            steps {
                sh 'nohup npm run preview &'
            }
        }

    }

    post {
        success {
            echo "🚀 Build & Preview lancé avec succès"
        }
        failure {
            echo "❌ Échec du pipeline"
        }
    }
}

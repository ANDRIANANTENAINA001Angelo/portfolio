pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/lib/jenkins/workspaces/portfolio-deploy"
    }

    options {
        timestamps()
        skipDefaultCheckout(true)
    }

    stages {

        stage('Prepare') {
            steps {
                sh '''
                    echo "📁 Création du dossier si inexistant"
                    mkdir -p $DEPLOY_DIR
                '''
            }
        }

        stage('Pull Code') {
            steps {
                sh '''
                    echo "⬇️ Pull du code dans le dossier local"
                    if [ ! -d "$DEPLOY_DIR/.git" ]; then
                        git clone -b deploy https://github.com/ANDRIANANTENAINA001Angelo/portfolio.git $DEPLOY_DIR
                    else
                        cd $DEPLOY_DIR
                        git fetch --all
                        git reset --hard origin/deploy
                    fi
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                    cd $DEPLOY_DIR
                    npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    cd $DEPLOY_DIR
                    npm run build
                '''
            }
        }

        stage('Preview (Local demo)') {
            steps {
                sh '''
                    cd $DEPLOY_DIR

                    echo "🛑 Kill old preview"
                    pkill -f "vite preview" || true

                    echo "🚀 Starting new preview"
                    nohup npm run preview > preview.log 2>&1 &
                '''
            }
        }

    }

    post {
        success {
            echo "🚀 Déploiement & preview lancés depuis le dossier local"
        }
        failure {
            echo "❌ Pipeline échoué"
        }
    }
}

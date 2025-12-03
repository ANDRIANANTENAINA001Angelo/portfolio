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

        stage('Test Node') {
            steps {
                sh '''
                    echo "=== NODE VERSION ==="
                    node -v
                    echo "=== NPM VERSION ==="
                    npm -v
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
                    
                    echo "🛑 Arrêt d'un ancien preview s'il existe"
                    pkill -f "vite preview" || true
                    sleep 2
                    
                    echo "🚀 Lancement du preview Vite sur http://localhost:4173"
                    
                    # Clé : nohup + disown pour détacher complètement de Jenkins
                    nohup npm run preview -- --host 0.0.0.0 --port 4173 > preview.log 2>&1 & disown
                    
                    # Attente que Vite démarre (augmente à 60s si lent)
                    echo "Attente du démarrage de Vite..."
                    for i in {1..60}; do
                        if grep -q "Local:   http://localhost:4173" preview.log 2>/dev/null; then
                            echo "Vite preview est prêt !"
                            echo "Ouvre ton navigateur → http://localhost:4173"
                            cat preview.log | grep -E "(Local|Network)"
                            exit 0
                        fi
                        sleep 1
                    done
                    
                    echo "Timeout : Vite n'a pas démarré, voici les logs :"
                    cat preview.log || true
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

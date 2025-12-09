pipeline {
    agent any

    environment {
        PROD_DIR = "/var/lib/jenkins/workspaces/portfolio-deploy"
        STAG_DIR = "/var/lib/jenkins/workspaces/portfolio-stagging"
        REPO_URL = "https://github.com/ANDRIANANTENAINA001Angelo/portfolio.git"
    }

    options {
        timestamps()
        skipDefaultCheckout(true)
    } 

    stages {

        stage('Prepare') {
            steps {
                sh '''
                    echo "📁 Création des dossiers si inexistants"
                    mkdir -p $PROD_DIR
                    mkdir -p $STAG_DIR 
                '''
            }
        } 

        /* ========================== PROD : branche deploy ========================== */
        stage('Pull PROD') {
            when { branch 'deploy' }
            steps {
                sh '''
                    echo "⬇️ Pull PROD"
                    if [ ! -d "$PROD_DIR/.git" ]; then
                        git clone -b deploy $REPO_URL $PROD_DIR
                    else
                        cd $PROD_DIR
                        git fetch --all
                        git reset --hard origin/deploy
                    fi
                '''
            }
        }

        stage('Install PROD deps') {
            when { branch 'deploy' }
            steps {
                sh '''
                    cd $PROD_DIR
                    npm install
                '''
            }
        }

        stage('Build PROD') {
            when { branch 'deploy' }
            steps {
                sh '''
                    cd $PROD_DIR
                    npm run build
                '''
            }
        }


        /* ========================== STAGING : branche stag ========================== */
        stage('Pull STAGING') { 
            when { branch 'stag' }
            steps {
                sh '''
                    echo "⬇️ Pull STAGING"
                    if [ ! -d "$STAG_DIR/.git" ]; then
                        git clone -b stag $REPO_URL $STAG_DIR
                    else
                        cd $STAG_DIR
                        git fetch --all
                        git reset --hard origin/stag
                    fi
                '''
            }
        }

        stage('Install STAG deps') {
            when { branch 'stag' }
            steps {
                sh '''
                    cd $STAG_DIR
                    npm install
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Déploiement terminé (PROD ou STAGING selon la branche)"
        }
        failure {
            echo "❌ Pipeline échoué"
        }
    }
}

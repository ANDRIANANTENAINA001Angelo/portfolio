pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/lib/jenkins/workspaces/portfolio-deploy"
        NVM_DIR = "/home/angelo/.nvm"
        NODE_VERSION = "24"
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
                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    echo "=== NVM VERSION ==="
                    command -v nvm || echo "nvm introuvable"

                    echo "=== NODE VERSION ==="
                    nvm use $NODE_VERSION
                    node -v

                    echo "=== NPM VERSION ==="
                    npm -v
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    nvm use $NODE_VERSION

                    cd $DEPLOY_DIR
                    npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    nvm use $NODE_VERSION

                    cd $DEPLOY_DIR
                    npm run build
                '''
            }
        }

        stage('Preview (Local demo)') {
            steps {
                sh '''
                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    nvm use $NODE_VERSION

                    cd $DEPLOY_DIR

                    echo "🛑 Kill old preview"
                    pkill -f "vite preview" || true

                    echo "🚀 Starting new preview"
                    nohup npm run preview > preview.log 2>&1 &
                '''
            }
        }
    }
}

@Library('ci-library') _

pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('1. Checkout') {
            steps {
                echo 'Descargando el codigo fuente...'
                checkout scm
            }
        }

        stage('2. Instalar dependencias') {
            steps {
                echo 'Instalando dependencias del proyecto...'
                npmInstall()
            }
        }

        stage('3. Validaciones en paralelo') {
            parallel {
                stage('3.1 Linter ESLint') {
                    steps {
                        echo 'Ejecutando revision de estilo con ESLint...'
                        npmLint()
                    }
                }

                stage('3.2 Tests automaticos') {
                    steps {
                        echo 'Ejecutando pruebas automaticas con Jest...'
                        npmTest()
                    }
                }

                stage('3.3 Verificar entorno') {
                    steps {
                        echo 'Verificando version de Node y npm...'
                        bat 'node -v'
                        bat 'npm -v'
                    }
                }
            }
        }

        stage('4. Build') {
            steps {
                echo 'Generando build de la aplicacion...'
                npmBuild()
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
        }

        success {
            echo 'Pipeline ejecutado correctamente.'
        }

        failure {
            echo 'El pipeline fallo. Revisar los logs.'
        }
    }
}
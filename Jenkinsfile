pipeline {
    agent any

    environment {
        // กำหนดตัวแปรสภาพแวดล้อม (ถ้าจำเป็น)
        REPO_URL = 'https://github.com/Pisol00/Job4All.git'
        BRANCH_NAME = 'main' // หรือชื่อ branch ที่คุณต้องการ
    }

    stages {
        stage('Clone Repository') {
            steps {
                // โคลนโปรเจ็กต์จาก GitHub
                git url: REPO_URL, branch: BRANCH_NAME
            }
        }

        stage('Check for Changes') {
            steps {
                script {
                    // ตรวจสอบการเปลี่ยนแปลงในโปรเจ็กต์
                    def changes = sh(script: 'git diff --name-only HEAD~1', returnStdout: true).trim()
                    if (changes) {
                        echo "Changes detected: ${changes}"
                        // ถ้ามีการเปลี่ยนแปลงให้ push ขึ้นไป
                        sh 'git add .'
                        sh 'git commit -m "Automated commit from Jenkins"'
                        sh 'git push origin ${BRANCH_NAME}'

                        // สั่งให้ npm start ใหม่
                        sh 'npm start &'
                    } else {
                        echo "No changes detected."
                    }
                }
            }
        }
    }
}

package main

import (
	"github.com/gin-gonic/gin"
	"github.com/marnysan111/CustomRoom/router"
)

func main() {
	r := gin.Default()
	r.GET("/", router.Index)
	r.POST("/twitter/signin", router)
	r.Run(":8080")
}

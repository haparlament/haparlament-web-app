package api

import (
	"democrathon.com/haparlament/ui"
	"github.com/gin-gonic/gin"
)

func Start() {
	store := newStore()
	router := gin.Default()
	addRoutes(router, store)
	ui.AddRoutes(router)

	router.Run(":8080")
}

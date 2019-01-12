package main

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"os"
	"path"
	"path/filepath"
	"strings"
)

func main() {
	t := template.Must(template.ParseFiles("layout.html"))

	tmpl := make(map[string]template.HTML)

	files, _ := filepath.Glob("templates/*")

	for _, file := range files {
		_, name := filepath.Split(file)
		name = strings.TrimSuffix(name, path.Ext(file))
		x, _ := ioutil.ReadFile(file)
		tmpl[name] = template.HTML(string(x[:]))
		fmt.Println(name)
	}
	f, _ := os.OpenFile("index.html", os.O_TRUNC|os.O_CREATE, 0777)

	t.Execute(f, tmpl)
}

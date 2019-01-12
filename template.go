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

	files, err := filepath.Glob("templates/*")

	if err != nil {
		panic(err)
	}

	for _, file := range files {
		_, name := filepath.Split(file)
		name = strings.TrimSuffix(name, path.Ext(file))
		x, _ := ioutil.ReadFile(file)
		tmpl[name] = template.HTML(string(x[:]))
		fmt.Println(name)
	}
	f, err := os.OpenFile("index.html", os.O_TRUNC|os.O_CREATE, 0777)

	if err != nil {
		panic(err)
	}

	t.Execute(f, tmpl)
}

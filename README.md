

### $ rails g rails_admin:install
go to localhost:3000/admin

### $ rails g foundation:install

### $ rails g react:install

### place:
https://raw.githubusercontent.com/systemjs/systemjs/master/dist/system.js.map

https://raw.githubusercontent.com/systemjs/systemjs/master/dist/system.js

https://raw.githubusercontent.com/ModuleLoader/es6-module-loader/master/dist/es6-module-loader.js

https://github.com/ModuleLoader/es6-module-loader/blob/master/dist/es6-module-loader.js.map

in
vender/assets/javascripts/es6


### application.rb

Rails.application.config.assets.configure do |env|
  env.register_transformer 'text/ecmascript-6', 'application/javasript',
    Sprockets::ES6.new('modules' => 'system', 'moduleIds' => true)
end

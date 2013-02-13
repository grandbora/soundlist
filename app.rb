require 'rubygems' if RUBY_VERSION < "1.9" #BDNF
require 'sinatra/base'

class MyApp < Sinatra::Base
  get '/' do
    'Hello World from MyApp in separate file!'
  end
end
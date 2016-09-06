require "bundler/gem_tasks"
task :default => :spec

desc "Rebuild js"
task :js do
  cd 'vendor/mj-single-gulp/' do
    `npm install`
    `gulp`
  end
end

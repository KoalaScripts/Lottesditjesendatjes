source "https://rubygems.org"

# This single gem bundles Jekyll together with the exact plugin versions
# that GitHub Pages uses on its servers. Building locally with this Gemfile
# guarantees your site looks the same locally as it will once published.
gem "github-pages", group: :jekyll_plugins

# Windows/JRuby do not include zoneinfo files by default.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows.
gem "wdm", "~> 0.1", :install_if => Gem.win_platform?

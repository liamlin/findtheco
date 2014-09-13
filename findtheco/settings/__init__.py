"""
Settings used by findtheco project.

This consists of the general produciton settings, with an optional import of any local
settings.
"""

# Import production settings.
from findtheco.settings.production import *

# Import optional local settings.
try:
    from findtheco.settings.local import *
except ImportError:
    pass
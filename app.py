#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dashboard Interactivo - Escape Room Mágico
Backend Python con Flask para servir el dashboard estático
"""

from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_cors import CORS
import json
import os
from datetime import datetime
import random

app = Flask(__name__)
CORS(app)

# Configuración
app.config['SECRET_KEY'] = 'escape-room-magico-secret-key'
app.config['JSON_AS_ASCII'] = False

# Datos simulados
USER_DATA = {
    "id": "user_001",
    "name": "Jugador Mágico",
    "email": "jugador@escaperoom.com",
    "phone": "+34 600 123 456",
    "avatar": "/avatars/user-avatar.jpg",
    "joinDate": "2024-01-15",
    "totalGamesPlayed": 156,
    "favoriteCategory": "espacio",
    "level": "Experto",
    "experience": 2847,
    "privacy": {
        "profilePublic": True,
        "showProgress": True,
        "showAchievements": True,
        "allowFriendRequests": True
    }
}

GAME_STATS = {
    "totalPlayTime": 48720,  # segundos
    "averageSessionTime": 1847,
    "bestTime": 127,
    "puzzlesSolved": 89,
    "hintsUsed": 23,
    "perfectGames": 12,
    "currentStreak": 5,
    "bestStreak": 15
}

CATEGORIES = [
    {
        "id": "clasico",
        "name": "Clásico",
        "icon": "🎭",
        "color": "#8B5CF6",
        "progress": 100,
        "totalPuzzles": 16,
        "completedPuzzles": 16,
        "bestTime": 245,
        "averageTime": 312,
        "difficulty": "difícil",
        "locked": False
    },
    {
        "id": "naturaleza",
        "name": "Naturaleza",
        "icon": "🌿",
        "color": "#10B981",
        "progress": 87,
        "totalPuzzles": 16,
        "completedPuzzles": 14,
        "bestTime": 189,
        "averageTime": 267,
        "difficulty": "medio",
        "locked": False
    },
    {
        "id": "espacio",
        "name": "Exploración Espacial",
        "icon": "🚀",
        "color": "#3B82F6",
        "progress": 75,
        "totalPuzzles": 16,
        "completedPuzzles": 12,
        "bestTime": 156,
        "averageTime": 234,
        "difficulty": "medio",
        "locked": False
    },
    {
        "id": "tiempo",
        "name": "Viaje en el Tiempo",
        "icon": "⏰",
        "color": "#F59E0B",
        "progress": 62,
        "totalPuzzles": 16,
        "completedPuzzles": 10,
        "bestTime": 198,
        "averageTime": 289,
        "difficulty": "medio",
        "locked": False
    },
    {
        "id": "deporte",
        "name": "Desafío Deportivo",
        "icon": "🏆",
        "color": "#EF4444",
        "progress": 50,
        "totalPuzzles": 16,
        "completedPuzzles": 8,
        "bestTime": 167,
        "averageTime": 245,
        "difficulty": "fácil",
        "locked": False
    }
]

ACHIEVEMENTS = [
    {
        "id": "first_puzzle",
        "name": "Primer Paso",
        "description": "Resuelve tu primer puzzle",
        "icon": "🎯",
        "unlocked": True,
        "unlockedDate": "2024-01-15",
        "progress": 1,
        "maxProgress": 1
    },
    {
        "id": "speed_demon",
        "name": "Demonio de Velocidad",
        "description": "Resuelve 10 puzzles en menos de 5 minutos",
        "icon": "⚡",
        "unlocked": True,
        "unlockedDate": "2024-02-20",
        "progress": 12,
        "maxProgress": 10
    },
    {
        "id": "perfectionist",
        "name": "Perfeccionista",
        "description": "Completa 5 categorías sin usar pistas",
        "icon": "💎",
        "unlocked": False,
        "progress": 3,
        "maxProgress": 5
    },
    {
        "id": "explorer",
        "name": "Explorador",
        "description": "Juega todas las categorías",
        "icon": "🗺️",
        "unlocked": True,
        "unlockedDate": "2024-03-10",
        "progress": 10,
        "maxProgress": 10
    }
]

FRIENDS = [
    {
        "id": "friend_001",
        "name": "Ana Martínez",
        "avatar": "/avatars/ana.jpg",
        "status": "online",
        "lastSeen": "Ahora",
        "level": 15,
        "progress": 67
    },
    {
        "id": "friend_002",
        "name": "Carlos Ruiz",
        "avatar": "/avatars/carlos.jpg",
        "status": "playing",
        "lastSeen": "Hace 5 min",
        "level": 22,
        "progress": 84
    },
    {
        "id": "friend_003",
        "name": "Laura Sánchez",
        "avatar": "/avatars/laura.jpg",
        "status": "offline",
        "lastSeen": "Hace 2 horas",
        "level": 18,
        "progress": 45
    }
]

NOTIFICATIONS = [
    {
        "id": "notif_001",
        "title": "Nuevo logro desbloqueado",
        "message": "¡Has desbloqueado 'Demonio de Velocidad'!",
        "time": "Hace 5 minutos",
        "read": False,
        "type": "achievement"
    },
    {
        "id": "notif_002",
        "title": "Amigo en línea",
        "message": "Ana Martínez está jugando ahora",
        "time": "Hace 10 minutos",
        "read": False,
        "type": "friend"
    }
]

DEVELOPER_INFO = {
    "name": "Escape Room Mágico Team",
    "email": "contacto@escaperoommagico.com",
    "phone": "+34 900 123 456",
    "address": "Calle Magia 123, 28080 Madrid, España",
    "website": "www.escaperoommagico.com",
    "github": "github.com/escaperoommagico",
    "twitter": "@escaperoommagico",
    "discord": "discord.gg/escaperoommagico"
}

@app.route('/')
def index():
    """Servir el dashboard interactivo"""
    return render_template('interactive_dashboard.html')

@app.route('/api/user/profile')
def get_user_profile():
    """Obtener perfil de usuario"""
    return jsonify(USER_DATA)

@app.route('/api/user/profile', methods=['POST'])
def update_user_profile():
    """Actualizar perfil de usuario"""
    data = request.json
    USER_DATA.update(data)
    return jsonify({"success": True, "message": "Perfil actualizado correctamente"})

@app.route('/api/user/stats')
def get_game_stats():
    """Obtener estadísticas del juego"""
    return jsonify(GAME_STATS)

@app.route('/api/categories')
def get_categories():
    """Obtener categorías"""
    return jsonify(CATEGORIES)

@app.route('/api/achievements')
def get_achievements():
    """Obtener logros"""
    return jsonify(ACHIEVEMENTS)

@app.route('/api/friends')
def get_friends():
    """Obtener amigos"""
    return jsonify(FRIENDS)

@app.route('/api/notifications')
def get_notifications():
    """Obtener notificaciones"""
    return jsonify(NOTIFICATIONS)

@app.route('/api/notifications/<notif_id>/read', methods=['POST'])
def mark_notification_read(notif_id):
    """Marcar notificación como leída"""
    for notif in NOTIFICATIONS:
        if notif['id'] == notif_id:
            notif['read'] = True
            break
    return jsonify({"success": True})

@app.route('/api/contact', methods=['POST'])
def send_contact_message():
    """Enviar mensaje de contacto"""
    data = request.json
    # Aquí podrías enviar el mensaje por email, guardarlo en base de datos, etc.
    print(f"Mensaje de contacto recibido: {data}")
    return jsonify({"success": True, "message": "Mensaje enviado correctamente"})

@app.route('/api/category/<category_id>/play')
def play_category(category_id):
    """Iniciar juego en una categoría"""
    category = next((c for c in CATEGORIES if c['id'] == category_id), None)
    if category and not category['locked']:
        return jsonify({"success": True, "category": category})
    return jsonify({"success": False, "message": "Categoría no disponible"}), 404

@app.route('/avatars/<filename>')
def serve_avatar(filename):
    """Servir archivos de avatar"""
    return send_from_directory('avatars', filename)

@app.route('/api/leaderboard')
def get_leaderboard():
    """Obtener tabla de líderes"""
    # Simulación de datos de leaderboard
    leaderboard = [
        {"rank": 1, "name": "MasterPlayer", "score": 9850, "level": 45},
        {"rank": 2, "name": "PuzzleKing", "score": 8720, "level": 42},
        {"rank": 3, "name": "EscapeArtist", "score": 7650, "level": 38},
        {"rank": 4, "name": "Jugador Mágico", "score": 6890, "level": 28},
        {"rank": 5, "name": "RookieRacer", "score": 5420, "level": 22}
    ]
    return jsonify(leaderboard)

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Recurso no encontrado"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Error interno del servidor"}), 500

if __name__ == '__main__':
    # Crear directorio de avatares si no existe
    if not os.path.exists('avatars'):
        os.makedirs('avatars')
    
    print("🎮 Dashboard Interactivo - Escape Room Mágico")
    print("🚀 Servidor iniciado en http://localhost:5000")
    print("📊 API disponible en http://localhost:5000/api")
    print("🎯 Presiona Ctrl+C para detener el servidor")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
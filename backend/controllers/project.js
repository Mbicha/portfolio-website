const Project = require('../models/project');

exports.newProject = async (req, res) => {
    try {
        
        // Basic validation - check if request body exists
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: 'fail',
                message: 'Request body cannot be empty'
            });
        }

        const project = await Project.create(req.body);

        res.status(201).json({  // 201 for resource creation
            status: 'success',
            data: project
        });

    } catch (error) {
        // Determine error type and send appropriate response
        let message = 'Failed to add project';
        if (error.name === 'ValidationError') {
            message = error.message;
        }

        res.status(500).json({
            status: 'error',
            message: message
        });
    }
}

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                status: 'fail',
                message: 'Project not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: project
        });

    } catch (error) {
        console.error(error);

        // Handle CastError (invalid ID format)
        if (error.name === 'CastError') {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid project ID format'
            });
        }

        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        
        if (projects.length > 0) {
            return res.status(200).json({
                project_count: projects.length,
                data: projects
            });
        }

        return res.status(404).json({
            status: 'fail',
            message: 'No Projects Yet'
        });

    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!project) {
            return res.status(404).json({
                status: 'fail',
                message: "Project does not exist"
            });
        }

        res.status(200).json({
            status: 'success',
            data: project
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: error.message
        });
    }
}

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({
                status: 'fail',
                message: 'No Project with such ID'
            })
        }

        return res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}
